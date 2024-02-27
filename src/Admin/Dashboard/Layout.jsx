import React from 'react';
import { Link,NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="">
            <div className="flex">
                <div className="w-64 bg-gray-800 h-screen">
                    <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
                        <h1 className="text-2xl">Logo</h1>
                    </div>
                    <div className="flex flex-col items-left p-6 gap-5 h-16 bg-gray-800 text-white">
                        <NavLink to={ '/dashboard' } className="hover:bg-gray-700 p-2 rounded">Dashboard</NavLink>
                        <Link to={ '/dashboard/biochemistryreagents' } className="hover:bg-gray-700 p-2 rounded">Biochemistry Reagents</Link>
                        <Link to={ '/dashboard/serologyreagents' } className="hover:bg-gray-700 p-2 rounded">Serology Reagents</Link>
                        <Link to={ '/dashboard/elisareagents' } className="hover:bg-gray-700 p-2 rounded">ELISA Reagents</Link>
                        <Link to={ '/dashboard/deviceandstrips' } className="hover:bg-gray-700 p-2 rounded">Device & Strips</Link>
                        <Link to={ '/dashboard/consumableandaccessories' } className="hover:bg-gray-700 p-2 rounded">Consumable & Accessories</Link>
                        <Link to={ '/dashboard/machine' } className="hover:bg-gray-700 p-2 rounded">Machine</Link>

                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
                        <h1 className="text-2xl">Content</h1>
                    </div>
                    <div className="p-4 items-center justify-end flex flex-col">
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Layout;