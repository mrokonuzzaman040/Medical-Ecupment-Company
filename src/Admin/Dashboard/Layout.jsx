import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex -mt-5">
            <div className="bg-slate-400 w-80 py-5 h-screen rounded-r-lg ">
                <div className='flex flex-col'>
                    <div className="">
                        <ul className='flex flex-col gap-10'>
                            <li>
                                <Link className='bg-gray-600 p-4 rounded-md font-thin text-base' to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link className='bg-gray-600 p-4 rounded-md font-thin text-base' to="/dashboard/products">Products</Link>
                            </li>
                            <li>
                                <Link className='bg-gray-600 p-4 rounded-md font-thin text-base' to="/dashboard/add-product">Add Product</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex">
                        <ul>
                            <li>
                                <button>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;