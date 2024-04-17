import React from 'react';
import Slider from './Slider/Slider';
import Products from './Product/Products';
import Branch from './Branch/Branch';
import Cliens from './Clients/Cliens';

const HomeLayout = () => {
    return (
        <div className='bg-white'>
            <Slider />
            <Products />
            <Branch />
            <Cliens />
        </div>
    );
};

export default HomeLayout;