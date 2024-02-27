import React from 'react';
import Header from '../Home/Common/Header/Header';
import CommonTable from '../components/CommonTable';

const BiochemistryReagents = () => {
    return (
        <div>
            <Header text="Biochemistry Reagents" />
            <CommonTable api={ 'bioreagent' } />
        </div>
    );
};

export default BiochemistryReagents;