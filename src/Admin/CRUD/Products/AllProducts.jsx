import React, { useEffect, useState } from 'react';
import AddProduct from '../AddProduct';
import ProductTable from '../ProductTable';


const AllProducts = () => {




    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <AddProduct api={ '/reagents' } />
                    <ProductTable api={ '/reagents' } />
                </div>
            </div>
        </div>
    );
};

export default AllProducts;