import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ( { image, name, brand, link: id } ) => {
    return (
        <div className="bg-white flex flex-col justify-between shadow-lg overflow-hidden rounded-xl">
            <div className="">
                <img src={ image } alt={ name } className="w-full lg:h-72 object-cover" />
            </div>
            <div className="p-4 text-center">
                <h2 className="text-xl font-bold">{ name }</h2>
                <p className="text-gray-500">{ brand }</p>
                <Link to={ `/product/${id}` } className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg inline-block">View Details</Link>
            </div>
        </div>
    );
};

export default ProductCard;