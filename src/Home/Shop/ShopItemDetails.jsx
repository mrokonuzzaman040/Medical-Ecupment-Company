import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShopItemDetails = () => {
    const data = useLoaderData();
    // @ts-ignore
    const productData = data[ 0 ];

    const { id, name, brand, countryorigin, price, discountprice, specification, imageurls } = productData;
    const productImage = JSON.parse( productData.imageurls );

    const [ showImage, setShowImage ] = useState( productImage[ 0 ] );

    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-center">
                            <img src={ showImage } alt={ name } className="w-96 h-96 object-contain" />
                        </div>
                        <div className="flex gap-4">
                            { productImage.map( ( image, index ) => (
                                <img
                                    key={ index }
                                    src={ image }
                                    alt={ name }
                                    className="w-24 h-24 object-contain rounded-xl"
                                    onClick={ () => setShowImage( image ) }
                                />
                            ) ) }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold">{ name }</h1>
                        <p className="text-lg font-semibold text-gray-600">{ brand }</p>
                        <p className="text-lg font-semibold text-gray-600">{ countryorigin }</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-2xl font-semibold"> <span className='text-sm'>৳</span> { discountprice }</p>
                            <p className="text-lg font-semibold line-through text-red-600"><span className='text-sm'>৳</span>{ price }</p>
                        </div>
                        <div className="flex gap-4">
                            <Link to={ `/buyNow/${id}` } className="bg-blue-600 text-white py-2 px-4 rounded-lg">Buy Now</Link>

                        </div>
                    </div>
                </div>
                <div className="mt-4 border p-4 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold">Specification</h2>
                    <br />
                    <p className="font-normal text-base text-gray-600">{ specification }</p>
                </div>
            </div>
        </div>
    );
};

export default ShopItemDetails;