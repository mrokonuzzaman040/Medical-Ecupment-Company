import React from 'react';
import Header from '../../Common/Header';
import ProductTable from '../CRUD/ProductTable';
import AddProduct from '../CRUD/AddProduct';

const BioReagent = () => {
    return (
        <div>
            <Header product='Biochemistry Reagents' />
            <AddProduct api={ '' } />
            <ProductTable api={ '' } />
        </div>
    );
};

export default BioReagent;