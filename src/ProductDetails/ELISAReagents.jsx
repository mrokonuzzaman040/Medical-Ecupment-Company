import React from 'react';
import Header from '../Home/Common/Header/Header';
import CommonTable from '../components/CommonTable';

const ELISAReagents = () => {
    return (
        <div>
            <Header text="ELISA Reagents" />
            <CommonTable api={ 'elsreagnt' } />
        </div>
    );
};

export default ELISAReagents;