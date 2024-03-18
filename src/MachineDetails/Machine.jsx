import React from 'react';
import { TiTickOutline } from "react-icons/ti";

const Machine = ( { name, model, brand, manufacturer, assembly, image, pdf } ) => {
    return (
        <div className="font-[sans-serif] bg-white">
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img src={ image } alt="Product" className="w-full rounded object-cover" />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-[#333] uppercase">Name: { name }</h2>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <p className="text-[#333] text-4xl font-bold">Brand: { brand }</p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <a href={ pdf } className='className="min-w-[200px] px-4 py-3 bg-[#36e453] hover:bg-[#66c573] text-white text-sm font-bold rounded"' target="_blank">
                                Download Product Catalog
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <h3 className="text-lg font-bold text-[#333]">Product information</h3>
                    <ul className="mt-6 space-y-6 uppercase text-[#333]">
                        <li className="flex items-center gap-4">
                            <TiTickOutline className="text-[#36e453] text-2xl" />
                            <p className="text-lg font-bold">Name</p>
                            <p>{ name }</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TiTickOutline className="text-[#36e453] text-2xl" />
                            <p className="text-lg font-bold">Model</p>
                            <p>{ model }</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TiTickOutline className="text-[#36e453] text-2xl" />
                            <p className="text-lg font-bold">Brand</p>
                            <p>{ brand }</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TiTickOutline className="text-[#36e453] text-2xl" />
                            <p className="text-lg font-bold">Manufacturer</p>
                            <p>{ manufacturer }</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TiTickOutline className="text-[#36e453] text-2xl" />
                            <p className="text-lg font-bold">Assembly</p>
                            <p>{ assembly }</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Machine;