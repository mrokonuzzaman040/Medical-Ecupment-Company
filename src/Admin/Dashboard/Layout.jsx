import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex -mt-5">
            <div className="bg-slate-400 w-80 p-6 h-screen rounded-r-lg">
                <div className='flex flex-col justify-evenly'>
                    <div className="">
                        <ul className='flex flex-col gap-10'>
                            <li>
                                <Link className='bg-gray-600 p-4 rounded-md font-thin text-base' to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link className='bg-gray-600 p-4 rounded-md font-thin text-base' to="/dashboard/products">Products</Link>
                            </li>
                            <li>
                                <Link className='bg-gray-600 p-4 rounded-md font-thin text-base' to="/dashboard/products/add">Add Product</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li>
                                <button>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;