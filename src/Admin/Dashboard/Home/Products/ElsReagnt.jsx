import React from 'react';
import Header from '../../Common/Header';
import AddProduct from '../CRUD/AddProduct';
import ProductTable from '../CRUD/ProductTable';

const ElsReagnt = () => {
    return (
        <div>
            <Header product='ELISA Reagents' />
            <AddProduct api={ 'elsreagnt' } />
            <ProductTable api={ 'elsreagnt' } />
        </div>
    );
};

export default ElsReagnt;