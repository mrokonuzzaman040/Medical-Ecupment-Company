import React from 'react';

const Header = ( { text } ) => {
    return (
        <div className='text-center p-4 bg-transparent '>
            <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{ text }</span></h1>
        </div>
    );
};

export default Header;