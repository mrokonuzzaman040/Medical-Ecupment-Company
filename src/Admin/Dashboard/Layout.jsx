import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
// @ts-ignore
import logo from './logo.png';
import useAuth from '../../Hooks/useAuth';

const Layout = () => {
    // @ts-ignore
    const { logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then( () => { } )
            .catch( error => console.log( error ) );
    }

    return (
        <div className="">
            <div className="flex">
                <div className="w-64 bg-gray-800 h-screen">
                    <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
                        <Link to={ '/' }><img src={ logo } alt="logo" /></Link>
                    </div>
                    <div className="flex flex-col items-left p-6 gap-5 h-16 bg-gray-800 text-white">
                        <NavLink to={ '/dashboard/biochemistryreagents' } className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500' }>Biochemistry Reagents</NavLink>
                        <NavLink to={ '/dashboard/serologyreagents' } className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500' }>Serology Reagents</NavLink>
                        <NavLink to={ '/dashboard/elisareagents' } className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500' }>ELISA Reagents</NavLink>
                        <NavLink to={ '/dashboard/deviceandstrips' } className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500' }>Device & Strips</NavLink>
                        <NavLink to={ '/dashboard/consumableandaccessories' } className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500' }>Consumable & Accessories</NavLink>
                        <NavLink to={ '/dashboard/machine' } className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500' }>Machine</NavLink>
                        <NavLink to={ '/dashboard/shop-item' } className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500' }>Shop Item</NavLink>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex items-center justify-between p-4 h-16 bg-gray-900 text-white">
                        <h1 className="text-2xl">Khan Biotech <span>Dashboard</span></h1>
                        <button className='btn btn-success' onClick={ handleLogOut }>Logout</button>
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