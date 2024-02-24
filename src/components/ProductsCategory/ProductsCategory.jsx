import React from 'react';
import { useActionData } from 'react-router-dom';

const ProductsCategory = () => {
    const data = useActionData();
    console.log( data );
    return (
        <div>

        </div>
    );
};

export default ProductsCategory;