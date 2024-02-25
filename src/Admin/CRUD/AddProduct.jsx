import React from 'react';
import usePublicApi from '../AxiosHandeler/usePublicApi';

const AddProduct = () => {

    const axiosPublic = usePublicApi();

    const addProduct = ( e ) => {
        e.preventDefault();
        const catagory = e.target.catagory.value;
        const name = e.target.name.value;
        const packSize = e.target.packSize.value;
        const test = e.target.test.value;
        const brand = e.target.brand.value;


        // check all the input fields
        if ( catagory === "" || name === "" || packSize === "" || test === "" || brand === "" ) {
            return alert( "Please fill all the fields" );
        }

        const product = {
            catagory,
            name,
            packSize,
            test,
            brand
        };

        axiosPublic.post( '/reagents', product )
            .then( ( response ) => {
                const message = window.confirm( 'Product added successfully' );
            } )
        e.target.reset();
    };
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-900">Add Product</h1>
            </div>
            <div className="mt-10 mb-10">
                <form onSubmit={ addProduct }>
                    <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-4">
                        <div className="relative bg-inherit">
                            <input type="text" id="catagory" name="catagory" className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="catagory" /><label htmlFor="catagory" className="absolute cursor-text left-0 -top-3 text-sm text-black bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all uppercase ">catagory</label>
                        </div>
                        <div className="relative bg-inherit">
                            <input type="text" id="name" name="name" className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="name" /><label htmlFor="name" className="absolute cursor-text left-0 -top-3 text-sm text-black bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all uppercase ">name</label>
                        </div>
                        <div className="relative bg-inherit">
                            <input type="text" id="packSize" name="packSize" className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="packSize" /><label htmlFor="packSize" className="absolute cursor-text left-0 -top-3 text-sm text-black bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all uppercase ">packSize</label>
                        </div>
                        <div className="relative bg-inherit">
                            <input type="text" id="test" name="test" className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="test" /><label htmlFor="test" className="absolute cursor-text left-0 -top-3 text-sm text-black bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all uppercase ">test</label>
                        </div>
                        <div className="relative bg-inherit">
                            <input type="text" id="brand" name="brand" className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Brand" /><label htmlFor="brand" className="absolute cursor-text left-0 -top-3 text-sm text-black bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all uppercase ">Brand</label>
                        </div>
                    </div>
                    <div className="mt-3 items-center flex ">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;