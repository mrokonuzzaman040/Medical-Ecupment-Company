import React from 'react';
import Header from '../../Common/Header';
import AddProduct from '../CRUD/AddProduct';
import ProductTable from '../CRUD/ProductTable';

const ElsReagnt = () => {
    return (
        <div>
            <Header product='ELISA Reagents' />
            <AddProduct api={ '' } />
            <ProductTable api={ '' } />
        </div>
    );
};

export default ElsReagnt;