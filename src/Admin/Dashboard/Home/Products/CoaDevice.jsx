import React from 'react';
import Header from '../../Common/Header';
import Consumable from '../CRUD/Consumable';
import ConsumableTable from '../CRUD/ConsumableTable';

const CoaDevice = () => {
    return (
        <div className='flex flex-col gap-4'>
            <Header product='Consumable & Accessories' />
            <Consumable api={ 'coadevice' } />
            {/* <ProductTable api={ 'coadevice' } /> */ }
            <ConsumableTable api={ 'coadevice' } editApi={'coadevice'} />
        </div>
    );
};

export default CoaDevice;