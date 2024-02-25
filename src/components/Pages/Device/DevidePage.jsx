import React from 'react';
import AddProduct from '../../../Admin/CRUD/AddProduct';
import PublicProduct from '../../../hooks/PublicProduct'; // Fix: Correct the casing of the import statement
import Header from '../../../webcomponents/Carts/Header';
const DevidePage = () => {

    return (
        <div className='w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto'>
            <Header titel="Device" />
            <PublicProduct api="/reagents" />
        </div>
    );
};

export default DevidePage;