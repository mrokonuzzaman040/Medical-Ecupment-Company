import React from 'react';
import Contact from './Contact';
import Ourclients from './Ourclients';
import Ourbranchs from './Ourbranchs';
import Slider from './Slider';
import Products from './Products';

const Root = () => {
    return (
        <div className='max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8'>
            <Slider />
            <Products />
            <Ourbranchs />
            <Ourclients />
            <Contact />
        </div>
    );
};

export default Root;