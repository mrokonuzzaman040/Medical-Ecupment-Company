import React from 'react';
import Header from '../../../webcomponents/Carts/Header';
import PublicProduct from '../../../hooks/PublicProduct';

const MachinePage = () => {
    return (
        <div>
            <Header titel='Machine' />
            <PublicProduct api='/machines' />
        </div>
    );
};

export default MachinePage;