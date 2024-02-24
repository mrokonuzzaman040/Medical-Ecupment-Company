import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ( { title, description, image, name, link } ) => {
    return (
        <>
            <Link className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]" to={ `/product/${link}` }>
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                    <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={ image } alt="Image Description" />
                </div>
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        { title }
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                        { description.slice( 0, 100 ) }
                    </p>
                </div>
            </Link>
        </>
    );
};

export default ProductsCard;