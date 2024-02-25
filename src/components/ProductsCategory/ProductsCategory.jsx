import React from 'react';
import Header from '../../webcomponents/Carts/Header';
import PublicProduct from '../../hooks/PublicProduct';

const ProductsCategory = () => {
    return (
        <div className='w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto'>
            <Header titel="Reagent" />
            <PublicProduct api="/reagents" />
        </div>
    );
};

export default ProductsCategory;