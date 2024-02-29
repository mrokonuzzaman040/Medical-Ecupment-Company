import React from 'react';
import Header from '../../Common/Header';
import AddMachine from '../CRUD/AddMachine';
import MachineTable from '../CRUD/MachineTable';

const MacDevice = () => {
    return (
        <div>
            <Header product='Machine' />
            <AddMachine api={ '/upload/image' } />
            <MachineTable api={ '' } />
        </div>
    );
};

export default MacDevice;