import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const BuyNow = () => {
  const data = useLoaderData();
  // @ts-ignore
  const productData = data[0];
  const { name, brand, countryorigin, price, discountprice, specification } = productData;

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: 1,
  });

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Calculate displayPrice (use discount if available)
  const displayPrice = discountprice || price;
  // Calculate total price
  const totalPrice = displayPrice * userInfo.quantity;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value,
    }));
  };

  const sendEmail = async () => {
    setIsLoading(true); // Start loading
    try {
      // Build your subject, text, html
      const subject = `New Order from ${userInfo.name}`;
      const text = `
        A new order has been placed.

        Customer Name: ${userInfo.name}
        Phone: ${userInfo.phone}
        Address: ${userInfo.address}
        Quantity: ${userInfo.quantity}

        Product Name: ${name}
        Brand: ${brand}
        Country of Origin: ${countryorigin}
        Original Price: ${price}
        Discount Price: ${discountprice || 'N/A'}
        Specification: ${specification}

        Total Price: ${totalPrice}

        Please follow up with the customer as soon as possible.
      `;

      const html = `
        <h2>New Order Details</h2>
        <ul>
          <li><strong>Customer Name:</strong> ${userInfo.name}</li>
          <li><strong>Phone:</strong> ${userInfo.phone}</li>
          <li><strong>Address:</strong> ${userInfo.address}</li>
          <li><strong>Quantity:</strong> ${userInfo.quantity}</li>
          <li><strong>Product Name:</strong> ${name}</li>
          <li><strong>Brand:</strong> ${brand}</li>
          <li><strong>Country of Origin:</strong> ${countryorigin}</li>
          <li><strong>Original Price:</strong> ${price}</li>
          <li><strong>Discount Price:</strong> ${discountprice || 'N/A'}</li>
          <li><strong>Specification:</strong> ${specification}</li>
          <li><strong>Total Price:</strong> ${totalPrice}</li>
        </ul>
        <p>Please follow up with the customer as soon as possible.</p>
      `;

      // Request body
      const requestBody = { subject, text, html };

      const response = await fetch('https://api.khanbiotech.com/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Order Placed!',
          text: 'Our delivery team will contact you soon.',
          icon: 'success',
        });
        setUserInfo({
          name: '',
          phone: '',
          address: '',
          quantity: 1,
        });
      } else {
        Swal.fire({
          title: 'Something Went Wrong!',
          text: 'Please try again later.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Network Error!',
        text: 'Please check your network connection.',
        icon: 'error',
      });
    } finally {
      setIsLoading(false); // Stop loading in both success & error
    }
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Order Your Desired Product</h2>
          <p className="mt-1 text-gray-600">
            Fill in the form below and click &quot;Place Order&quot; to confirm.
          </p>
        </div>

        {/* 2-column layout for large screens */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left Section: Product Summary */}
          <div className="border rounded-xl p-6 shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-4 text-center">{name}</h3>

            <div className="flex flex-col items-center space-y-2 mb-6">
              <p className="text-sm text-gray-500">
                <strong>Brand:</strong> {brand}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Country of Origin:</strong> {countryorigin}
              </p>
              <p className="text-sm text-gray-500 text-center">
                <strong>Specification:</strong> {specification}
              </p>
            </div>

            <div className="mb-6 text-center">
              {discountprice && (
                <div className="text-2xl font-bold text-green-600">
                  {discountprice} <span className="text-base text-gray-500">BDT</span>
                </div>
              )}
              <div
                className={`${
                  discountprice
                    ? 'line-through text-gray-400'
                    : 'text-blue-600 font-bold'
                } text-xl`}
              >
                {price} BDT
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg text-sm leading-relaxed">
              <p>
                <strong>Delivery Charge:</strong> 80 BDT inside Dhaka
              </p>
              <p className="mb-2">150 BDT outside Dhaka</p>
              <p>
                <strong>Delivery Time:</strong> 2-5 business days.
              </p>
            </div>
          </div>

          {/* Right Section: Order Form */}
          <div className="border rounded-xl p-6 shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-center mb-6">Order Form</h3>

            <form onSubmit={handleOrderSubmit} className="grid grid-cols-1 gap-6">
              <label className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">Your Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={userInfo.name}
                  onChange={handleInputChange}
                  placeholder="What's your good name?"
                  className="bg-gray-50 p-3 rounded-lg outline-none border border-gray-200 focus:border-blue-500"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">Your Phone</span>
                <input
                  type="phone"
                  name="phone"
                  required
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Your Phone Number"
                  className="bg-gray-50 p-3 rounded-lg outline-none border border-gray-200 focus:border-blue-500"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">Your Address</span>
                <input
                  type="text"
                  name="address"
                  required
                  value={userInfo.address}
                  onChange={handleInputChange}
                  placeholder="Enter Your Address"
                  className="bg-gray-50 p-3 rounded-lg outline-none border border-gray-200 focus:border-blue-500"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-2 font-medium text-gray-700">Quantity</span>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={userInfo.quantity}
                  onChange={handleInputChange}
                  className="bg-gray-50 p-3 rounded-lg outline-none border border-gray-200 focus:border-blue-500"
                />
              </label>

              {/* Dynamic Total Price */}
              <div className="text-center mt-2">
                <p className="text-lg text-gray-700">
                  <strong>Total Price:</strong>{' '}
                  <span className="font-semibold text-blue-600">
                    {totalPrice} BDT
                  </span>
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`mt-4 w-full ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white py-3 rounded-lg font-medium transition-all duration-300`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <span className="mr-2">Placing Order...</span>
                    {/* Spinner */}
                    <div className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  'Place Order'
                )}
              </button>
            </form>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default BuyNow;
