import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ( { title, description, image, name, link } ) => {
    return (
        <>
            <div className="product-item p-2 flex flex-col gap-3">
                <img src={ image } alt={ title } className='w-full h-96 rounded-2xl' />
                <div className="product-content">
                    <h3 className='text-xl font-mono text-center'>{ title }</h3>
                    <p className='text-sm font-light'>{ description }</p>
                </div>

                <div className="product-footer">
                    <Link to={ link } type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-teal-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "> { name }</Link>
                </div>
            </div>
        </>
    );
};

export default ProductsCard;