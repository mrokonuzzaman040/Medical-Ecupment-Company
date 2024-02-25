import React from 'react';
import AddProduct from '../CRUD/AddProduct';
import ProductTable from '../CRUD/ProductTable';

const AdminDevice = () => {
    return (
        <div>
            <AddProduct api='/device' />
            <ProductTable api='/device' />
        </div>
    );
};

export default AdminDevice;