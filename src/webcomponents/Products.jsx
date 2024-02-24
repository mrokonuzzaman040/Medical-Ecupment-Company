import React from 'react';
import { config } from '../../config';
import ProductsCard from './Carts/products';
import Header from './Carts/Header';

const Products = () => {
    return (
        <>
            <div className="">
                <Header titel="Products" />
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                {
                    config.productsContent.map( ( item, index ) => (
                        <ProductsCard title={ item.title } description={ item.description } image={ item.image } name={ item.button.name } link={ item.button.link } />
                    ) )
                }
            </div>
        </>
    );
};

export default Products;