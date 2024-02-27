import React from 'react';
import Header from '../Common/Header/Header';
import { config } from '../../../config';
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
            <Header text="Products" />
            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-5">
                {
                    config.homeProducts.map( ( item, index ) => (
                        <ProductCard key={ index } name={ item.name } brand={ item.brand } image={ item.image } link={ item.link } />
                    ) )
                }
            </div>
        </div>
    );
};

export default Products;