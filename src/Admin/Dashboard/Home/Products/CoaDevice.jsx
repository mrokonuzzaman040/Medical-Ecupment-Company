import React from 'react';
import Header from '../../Common/Header';
import AddProduct from '../CRUD/AddProduct';
import ProductTable from '../CRUD/ProductTable';

const CoaDevice = () => {
    return (
        <div>
            <Header product='Consumable & Accessories' />
            <AddProduct api={ '' } />
            <ProductTable api={ '' } />
        </div>
    );
};

export default CoaDevice;