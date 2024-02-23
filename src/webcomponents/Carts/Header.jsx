import React from 'react';

const Header = ( { titel } ) => {
    return (
        <div className="h-24 text-center text-2xl font-serif flex flex-col justify-center">
            <h1>{ titel }</h1>
        </div>
    );
};

export default Header;