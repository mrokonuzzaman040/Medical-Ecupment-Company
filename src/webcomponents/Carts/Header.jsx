import React from 'react';

const Header = ( { titel } ) => {
    return (
        <div className="h-24 text-center text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 font-serif flex flex-col justify-center">
            <h1>{ titel }</h1>
        </div>
    );
};

export default Header;