import React from 'react';
import Header from '../../Common/Header';
import AddProduct from '../CRUD/AddProduct';
import ProductTable from '../CRUD/ProductTable';

const SerReagent = () => {
    return (
        <div>
            <Header product='Serology Reagents' />
            <AddProduct api={ 'serreagent' } />
            <ProductTable api={ 'serreagent' } />
        </div>
    );
};

export default SerReagent;