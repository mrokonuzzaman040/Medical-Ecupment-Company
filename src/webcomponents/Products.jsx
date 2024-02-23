import React from 'react';
import { config } from '../../config';
import ProductsCard from './Carts/products';

const Products = () => {
    return (
        <>
            <div className="">
                <div className="">
                    <h1>Products</h1>
                </div>
                <div className="grid grid-cols-3">
                    {
                        config.productsContent.map( ( item, index ) => (
                            <ProductsCard title={ item.title } description={ item.description } image={ item.image } name={ item.button.name } link={ item.button.link } />
                        ) )
                    }
                </div>
            </div>
        </>
    );
};

export default Products;