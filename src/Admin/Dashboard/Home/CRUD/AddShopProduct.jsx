import React, { useState } from 'react';
import useAxiosImage from '../../../../Hooks/useAxiosImage';
import usePublicApi from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import ShopTable from '../../Common/ShopTable';


const AddShopProduct = () => {
    const [ productImages, setproductImages ] = useState( [] );
    const [ productImageurls, setproductImageurls ] = useState( [] );

    const uploadproductImages = async () => {

    };

    return (
        <>
            <div className='flex lg:flex-row-reverse sm:flex-col justify-between items-center bg-slate-300 p-10 rounded-lg w-full'>
                <div className="flex sm:flex-col gap-4">
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 uppercase underline text-center text-sm font-bold mb-2">
                            Product Images
                        </label>
                        <div className="max-w-max h-48">
                            {/* upload images and show it here */ }
                            <div className="grid grid-cols-4">
                                {
                                    productImageurls.map( ( image, index ) => (
                                        <div className='flex items-center' key={ index }>
                                            <img className='w-1/2' src={ image } alt="product" />
                                        </div>
                                    ) )
                                }
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center gap-5">
                                <div className="">
                                    <input
                                        type="file"
                                        id="images"
                                        multiple
                                        // @ts-ignore
                                        onChange={ ( e ) => { setproductImages( e.target.files ) } }
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="">
                                    {/* while uploading show a progess bar */ }
                                    <button
                                        onClick={ uploadproductImages }
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Upload Images
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-4 lg:gap-2 items-center">
                        <div className="">
                            <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Name</label>
                            <input type="text" placeholder="Name" className="border border-gray-400 p-2 rounded" />
                        </div>
                        <div className="">
                            <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Brand</label>
                            <input type="text" placeholder="Brand" className="border border-gray-400 p-2 rounded" />
                        </div>
                        <div className="">
                            <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Country of Origin</label>
                            <input type="text" placeholder="Country of Origin" className="border border-gray-400 p-2 rounded" />
                        </div>
                        <div className="">
                            <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Normal Price</label>
                            <input type="text" placeholder="Normal Price" className="border border-gray-400 p-2 rounded" />
                        </div>
                        <div className="">
                            <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Discount Price</label>
                            <input type="text" placeholder="Discount Price" className="border border-gray-400 p-2 rounded" />
                        </div>
                        <div className="">
                            <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Stock</label>
                            <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="This is a textarea placeholder"></textarea>
                        </div>

                    </div>
                    <button
                        // onClick={ () => addMachine() }
                        className="btn btn-accent w-full mt-3">
                        Add to Shop
                    </button>
                </div>
            </div>
            <ShopTable />
        </>
    )
};

export default AddShopProduct;