import React from 'react';
import Header from '../Home/Common/Header/Header';
import CommonTable from '../components/CommonTable';

const SerologyReagents = () => {
    return (
        <div>
            <Header text="Serology Reagents" />
            <CommonTable api={ 'serreagent' } />
        </div>
    );
};

export default SerologyReagents;