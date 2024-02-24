import React from 'react';
import usePublicApi from '../AxiosHandeler/usePublicApi';

const AddProduct = () => {

    const axiosPublic = usePublicApi();

    const addProduct = ( e ) => {
        e.preventDefault();
        const category = e.target.category.value;
        const name = e.target.name.value;
        const packSize = e.target.packSize.value;
        const test = e.target.test.value;
        const brand = e.target.brand.value;

        const product = {
            category,
            name,
            packSize,
            test,
            brand
        };

        axiosPublic.post( '/reagents', product )
            .then( ( response ) => {
                console.log( response );
            } )
            .catch( ( error ) => {
                console.error( "Error adding product:", error );
            } );

        console.log( product );
    };
    return (
        <div>
            <div className="">
                <h1 className="text-2xl font-semibold text-gray-900">Add Product</h1>
            </div>
            <div className="">
                <form onSubmit={ addProduct }>
                    <div className="">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <input type="text" name="category" id="category" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="">
                        <label htmlFor="packSize" className="block text-sm font-medium text-gray-700">Package Size</label>
                        <input type="text" name="packSize" id="packSize" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="">
                        <label htmlFor="test" className="block text-sm font-medium text-gray-700">Test</label>
                        <input type="text" name="test" id="test" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="">
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
                        <input type="text" name="brand" id="brand" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;