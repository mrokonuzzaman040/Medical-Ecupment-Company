import React from 'react';
import Header from '../Home/Common/Header/Header';
import Machine from './Machine';
import { useLoaderData } from 'react-router-dom';

const MachineDetails = () => {
    const data = useLoaderData();
    
    if ( !data ) {
        return <>
            <div className="skeleton w-32 h-32">
                <div className="animate-pulse bg-gray-300 rounded-lg h-32 w-32" />
            </div>
        </>;
    }

    return (
        <>
            <Header text={ 'Machine' } />
            <Machine name={ data.name } model={ data.model } brand={ data.brand } manufacturer={ data.manufacturer } assembly={ data.assembly } image={ data.image } pdf={ data.pdf } />
        </>
    );
};

export default MachineDetails;