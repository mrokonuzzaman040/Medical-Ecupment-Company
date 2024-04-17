import React from 'react';
import Header from '../Home/Common/Header/Header';
import Machine from './Machine';
import { useLoaderData } from 'react-router-dom';

const MachineDetails = () => {
    const data = useLoaderData();
    const machine = data[ 0 ];
    console.log( machine );
    const { name, model, brand, manufacturer, assembly, image, pdf } = machine;

    if ( !machine ) {
        return <>
            <div className="skeleton w-32 h-32">
                <div className="animate-pulse bg-gray-300 rounded-lg h-32 w-32" />
            </div>
        </>;
    }

    return (
        <>
            <Header text={ 'Machine' } />
            <Machine name={ name } model={ model } brand={ brand } manufacturer={ manufacturer } assembly={ assembly } image={ image } pdf={ pdf } />
        </>
    );
};

export default MachineDetails;