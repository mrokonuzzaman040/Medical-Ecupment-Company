import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsDetails = () => {
    const data = useLoaderData();
    // @ts-ignore
    const { title, description, image } = data;
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{ title }</h1>
            <p className="text-lg text-gray-600 mb-8">{ description }</p>
            <img src={ image } alt="Image Description" />
        </div>
    );
};

export default ProductsDetails;