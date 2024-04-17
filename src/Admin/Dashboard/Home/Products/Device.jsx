import React from 'react';
import Header from '../../Common/Header';
import AddProduct from '../CRUD/AddProduct';
import ProductTable from '../CRUD/ProductTable';

const Device = () => {
    return (
        <div>
            <Header product='Device & Strips' />
            <AddProduct api={ 'device' } />
            <ProductTable api={ 'device' } />
        </div>
    );
};

export default Device;