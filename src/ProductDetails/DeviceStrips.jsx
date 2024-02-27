import React from 'react';
import Header from '../Home/Common/Header/Header';
import CommonTable from '../components/CommonTable';

const DeviceStrips = () => {
    return (
        <div>
            <Header text="Device Strips" />
            <CommonTable api={ 'device' } />
        </div>
    );
};

export default DeviceStrips;