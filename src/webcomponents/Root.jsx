import React from 'react';
import Contact from './Contact';
import Ourclients from './Ourclients';
import Ourbranchs from './Ourbranchs';
import Slider from './Slider';
import Products from './Products';

const Root = () => {
    return (
        <div>
            <Slider />
            <Products />
            <Ourbranchs />
            <Ourclients />
            <Contact />
        </div>
    );
};

export default Root;