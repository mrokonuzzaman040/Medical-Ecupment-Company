import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const BuyNow = () => {
    const data = useLoaderData();
    // @ts-ignore
    const productData = data[ 0 ];

    const { name, brand, countryorigin, price, discountprice, specification } = productData;

    const [ userInfo, setUserInfo ] = useState( {
        name: '',
        phone: '',
        address: '',
        quantity: 1
    } );

    const handleInputChange = ( e ) => {
        const { name, value } = e.target;
        setUserInfo( prevState => ( {
            ...prevState,
            [ name ]: value
        } ) );
    };

    const sendEmail = () => {
        const templateParams = {
            from_name: userInfo.name,
            to_name: 'Recipient Name',
            message: `-------Customer info---------\nName: ${userInfo.name}\nPhone: ${userInfo.phone}\nAddress: ${userInfo.address}\nQuantity: ${userInfo.quantity}\n\n
            -------Product info---------
            \nProduct: ${name} \nPrice: ${price} \nDiscount Price: ${discountprice} \nSpecification: ${specification} \nBrand: ${brand} \nCountry Origin: ${countryorigin}`,
        };

        emailjs.send( 'service_7hchbjm', 'template_kqszb6p', templateParams, 'oa50EUfsOPWHBPFgg' )
            .then( ( response ) => {
                Swal.fire( {
                    title: 'Order Placed!',
                    text: 'Our delivery man will get back to you as soon as possible.',
                    icon: 'success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                } );
                console.log( 'SUCCESS!', response );
            } )
            .catch( ( error ) => {
                console.log( 'FAILED...', error );
                Swal.fire( {
                    title: 'Something Went Wrong!',
                    text: 'Please try again later.',
                    icon: 'error',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                } );
            } );
    };

    const handleOrderSubmit = ( e ) => {
        e.preventDefault();
        setUserInfo( {
            name: '',
            phone: '',
            address: '',
            quantity: 1,
        } );
        sendEmail();
    };
    return (
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div className="max-w-2xl lg:max-w-5xl mx-auto">
                    <div className="mt-12 grid items-center">
                        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
                            <h2 className="mb-8 text-xl text-center font-semibold text-balck">Order Information</h2>
                            <form
                                onSubmit={ handleOrderSubmit }
                                action="" className="grid grid-cols-1 gap-6">

                                <label className='flex flex-col'>
                                    <span className='text-black font-medium mb-4'>Your Name</span>
                                    <input
                                        type='text'
                                        name='name'
                                        required
                                        value={ userInfo.name }
                                        onChange={ handleInputChange }
                                        placeholder="What's your good name?"
                                        className='bg-gray-50 p-4 rounded-lg outline-none border-none font-medium'
                                    />
                                </label>

                                <label className='flex flex-col'>
                                    <span className='text-black font-medium mb-4'>Your Phone</span>
                                    <input
                                        type='phone'
                                        name='phone'
                                        required
                                        value={ userInfo.phone }
                                        onChange={ handleInputChange }
                                        placeholder="Enter Your Phone Number"
                                        className='bg-gray-50 p-4 rounded-lg outline-none border-none font-medium'
                                    />
                                </label>

                                <label className='flex flex-col'>
                                    <span className='text-black font-medium mb-4'>Your Address</span>
                                    <input
                                        type='text'
                                        name='address'
                                        required
                                        value={ userInfo.address }
                                        onChange={ handleInputChange }
                                        placeholder="Enter Your Address"
                                        className='bg-gray-50 p-4 rounded-lg outline-none border-none font-medium'
                                    />
                                </label>

                                <label className='flex flex-col'>
                                    <span className='text-black font-medium mb-4'>Quantity</span>
                                    <input
                                        type='number'
                                        name='quantity'
                                        value={ userInfo.quantity }
                                        onChange={ handleInputChange }
                                        placeholder="What's your message?"
                                        className='bg-gray-50 p-4 rounded-lg outline-none border-none font-medium'
                                    />
                                </label>

                                <button
                                    type='submit'
                                    className='bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300'>
                                    Place Order
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default BuyNow;