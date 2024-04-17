import React from 'react';

const Header = ( { product } ) => {
    return (
        <div className='text-center p-6'>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">{ product } <br /><span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Add</span> or <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Delete</span> </h1>
        </div>
    );
};

export default Header;