import React from 'react';
import Header from './Carts/Header';
import { config } from '../../config';
import BranchCard from './Carts/BranchCard';

const Ourbranchs = () => {
    return (
        <>
            <Header titel="Our Branchs" />
            <div className="grid gap-4 items-center justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {
                    config.branchContent.map( ( item, index ) => (
                        <BranchCard titel={ item.titel } branch={ item.branch } address={ item.address } contact={ item.contact } />
                    ) )
                }
            </div>
        </>
    );
};

export default Ourbranchs;