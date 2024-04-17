import React from 'react';
import Header from '../../Common/Header';
import AddMachine from '../CRUD/AddMachine';
import MachineTable from '../CRUD/MachineTable';

const MacDevice = () => {
    return (
        <div className='flex flex-col gap-3'>
            <Header product='Machine' />
            <AddMachine api={ '/machine' } />
            <MachineTable api={ '/machine' } />
        </div>
    );
};

export default MacDevice;