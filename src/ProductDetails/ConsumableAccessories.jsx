import React from 'react';
import Header from '../Home/Common/Header/Header';
import CommonTable from '../components/CommonTable';
import ConsumablePublicTable from './ConsumablePublicTable';

const ConsumableAccessories = () => {
    return (
        <div>
            <Header text="Consumable & Accessories" />
            <ConsumablePublicTable api={ 'coadevice' } />
        </div>
    );
};

export default ConsumableAccessories;