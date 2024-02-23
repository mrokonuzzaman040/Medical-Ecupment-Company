import React from 'react';

const BranchCard = ( { titel, branch, address, contact } ) => {
    return (
        <>
            <div className="bg-gray-100 p-4 rounded-2xl">
                <h1 className="text-2xl font-bold">{ titel }</h1>
                <p className="text-gray-600">{ branch }</p>
                <p className="text-gray-600">{ address }</p>
                <p className="text-gray-600">{ contact }</p>
            </div>
        </>
    );
};

export default BranchCard;