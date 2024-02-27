import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { config } from '../../../../config';


const Navbar = () => {
    return (
        <div className="navbar bg-green-700 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={ 0 } role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={ 0 } className="menu bg-gray-400 text-white menu-sm dropdown-content mt-3 p-2 sm:z-[10] md:z-[10] lg:z-[0] shadow  rounded-box w-72">
                        <li>
                            <NavLink className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 text-green-700 font-bold border-green-500' : 'hover:border-b-4 hover:border-green-500' } to={ '/' }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <a>Products</a>
                            <ul className="p-2">
                                {
                                    config.navbarsubmenu.links.map( ( link, index ) => { return ( <li key={ index }><Link to={ link.url }>{ link.name }</Link></li> ) } )
                                }
                            </ul>
                        </li>
                        <li>
                            <NavLink className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 text-green-700 font-bold border-green-500' : 'hover:border-b-4 hover:border-green-500' } to={ '/about' }>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 text-green-700 font-bold border-green-500' : 'hover:border-b-4 hover:border-green-500' } to={ '/clients' }>
                                Our Clients
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 text-green-700 font-bold border-green-500' : 'hover:border-b-4 hover:border-green-500' } to={ '/contact' }>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={ '/' } className="text-lg font-bold"><img className='lg:w-1/4 sm:w-1/2' src={ config.site.logo } alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex text-gray-700">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 text-white font-bold border-green-500' : 'hover:border-b-4 hover:border-green-500' } to={ '/' }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <details>
                            <summary>Products</summary>
                            <ul className="p-2 z-[10] text-gray-700 w-72">
                                {
                                    config.navbarsubmenu.links.map( ( link, index ) => { return ( <li key={ index }><Link to={ link.url }>{ link.name }</Link></li> ) } )
                                }
                            </ul>
                        </details>
                    </li>
                    <li>
                        <NavLink className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 text-white font-bold border-green-500' : 'hover:border-b-4 hover:border-green-500' } to={ '/about' }>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={ ( { isActive, isPending } ) => isActive ? 'border-b-4 text-white font-bold border-green-500' : 'hover:border-b-4 hover:border-green-500' } to={ '/clients' }>
                            Our Clients
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center">
                    <Link to={ '/contact' } className="btn bg-green-200 border-blue-300">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;