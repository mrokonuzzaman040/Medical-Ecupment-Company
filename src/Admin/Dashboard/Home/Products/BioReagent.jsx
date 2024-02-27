import React from 'react';
import Header from '../../Common/Header';
import ProductTable from '../CRUD/ProductTable';
import AddProduct from '../CRUD/AddProduct';

const BioReagent = () => {
    return (
        <div>
            <Header product='Biochemistry Reagents' />
            <AddProduct api={ 'bioreagent' } />
            <ProductTable api={ 'bioreagent' } />
        </div>
    );
};

export default BioReagent;