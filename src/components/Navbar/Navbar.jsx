import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../../config';

const Navbar = () => {
    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800 mb-5 relative">
            <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
                <div className="relative md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <Link className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ config.site.url } aria-label="Brand">{ config.site.titel }</Link>
                        <div className="md:hidden">
                            <button type="button" className="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                            <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                                <Link className="font-medium text-white py-3 md:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ config.navbar.home.link } aria-current="page">{ config.navbar.home.titel }</Link>

                                <Link className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ config.navbar.ourclient.url }>
                                    { config.navbar.ourclient.title }
                                </Link>

                                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                                    <button type="button" className="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        { config.navbar.products.title }
                                        <svg className="flex-shrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </button>

                                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                                        <div className="grid grid-cols-2 md:grid-cols-10">
                                            <div className="md:col-span-3">
                                                <div className="flex flex-col py-6 px-3 md:px-6">
                                                    <div className="space-y-4">
                                                        <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">{ config.navbar.products.reagent.title }</span>
                                                        { config.navbar.products.reagent.items.map( ( product, index ) => (
                                                            <Link className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ `/product-category/${product.link}` }>
                                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                                                <div className="grow">
                                                                    <p>{ product.name }</p>
                                                                </div>
                                                            </Link>
                                                        ) ) }

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="md:col-span-3">
                                                <div className="flex flex-col py-6 px-3 md:px-6">
                                                    <div className="space-y-4">
                                                        <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">Device & Strips</span>

                                                        { config.deviceandstripe.map( ( product, index ) => (
                                                            <Link className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ `/device/${product.name}` }>
                                                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                                                <div className="grow">
                                                                    <p>{ product.name }</p>
                                                                </div>
                                                            </Link>
                                                        ) ) }

                                                    </div>

                                                    <div className="mt-7 space-y-4">
                                                        <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">Machine</span>

                                                        {
                                                            config.machineData.map( ( product, index ) => (
                                                                <Link className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ `/machine/${product.name}` }>
                                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                                                    <div className="grow">
                                                                        <p>{ product.name }</p>
                                                                    </div>
                                                                </Link>
                                                            ) )

                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-full md:col-span-4">
                                                <div className="flex flex-col bg-gray-50 p-6 dark:bg-gray-700">
                                                    <span className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">Customer stories</span>

                                                    <a className="mt-4 group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                        <div className="aspect-w-16 aspect-h-9">
                                                            <img className="w-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Image Description" />
                                                        </div>
                                                        <div className="mt-2">
                                                            <p className="text-gray-800 dark:text-gray-200">Preline Projects has proved to be most efficient cloud based project tracking and bug tracking tool.</p>
                                                            <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                                                                Learn more
                                                                <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ config.navbar.branches.url }>
                                    Our Branch <span className="py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600">{ config.navbar.branches.totalBranches }</span>
                                </Link>

                                <div className="pt-3 md:pt-0">
                                    <Link className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to={ '/contact' }>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;