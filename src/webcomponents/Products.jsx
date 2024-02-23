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
            <div className="grid grid-cols-3 gap-5">
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