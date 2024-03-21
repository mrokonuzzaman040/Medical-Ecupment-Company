import React from 'react';
import Header from '../../Common/Header';
import AddProduct from '../CRUD/AddProduct';
import ProductTable from '../CRUD/ProductTable';
import Consumable from '../CRUD/Consumable';

const CoaDevice = () => {
    return (
        <div>
            <Header product='Consumable & Accessories' />
            {/* <AddProduct api={ 'coadevice' } /> */ }
            <Consumable api={ 'coadevice' } />
            <ProductTable api={ 'coadevice' } />
        </div>
    );
};

export default CoaDevice;