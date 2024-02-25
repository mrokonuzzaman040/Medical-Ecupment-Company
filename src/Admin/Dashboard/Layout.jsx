import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex mt-5 gap-5">
            <div className="bg-white w-80 py-5 h-screen rounded-r-lg ">
                <ul className="flex flex-col gap-5 px-5">
                    <li className='px-4 py-2 border-b-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition-all duration-200'>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className='px-4 py-2 border-b-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition-all duration-200'>
                        <Link to="/dashboard/regent">Regent</Link>
                    </li>
                    <li className='px-4 py-2 border-b-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition-all duration-200'>
                        <Link to="/dashboard/device">Devices</Link>
                    </li>
                </ul>
            </div>
            <div className="w-full h-screen bg-slate-300 p-10 rounded-xl">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;