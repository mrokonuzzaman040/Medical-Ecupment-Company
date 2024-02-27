import React from 'react';
import Header from '../Home/Common/Header/Header';
import CommonTable from '../components/CommonTable';

const ConsumableAccessories = () => {
    return (
        <div>
            <Header text="Consumable & Accessories" />
            <CommonTable api={ 'coadevice' } />
        </div>
    );
};

export default ConsumableAccessories;