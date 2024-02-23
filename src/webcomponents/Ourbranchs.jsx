import React from 'react';
import Header from './Carts/Header';
import { config } from '../../config';
import BranchCard from './Carts/BranchCard';

const Ourbranchs = () => {
    return (
        <>
            <Header titel="Our Branchs" />
            <div className="flex gap-4 items-center justify-center flex-cols-2">
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