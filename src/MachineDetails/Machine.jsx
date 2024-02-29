import React from 'react';

const Machine = ( { name, model, brand, manufacturer, assembly, image, pdf } ) => {
    return (
        <div className="font-[sans-serif] bg-white">
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img src={ image } alt="Product" className="w-4/5 rounded object-cover" />
                            <button type="button" className="absolute top-4 right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#ccc" className="mr-1 hover:fill-[#333]" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-[#333] uppercase">{ name }</h2>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <p className="text-[#333] text-4xl font-bold">{ brand }</p>
                            <p className="text-gray-400 text-xl"><>{ model }</> <span className="text-sm ml-1">Best Selling </span></p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <a href={ pdf } download target="_blank">
                                <button type="button" className="min-w-[200px] px-4 py-3 bg-[#36e453] hover:bg-[#66c573] text-white text-sm font-bold rounded">Download Product Catalog</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <h3 className="text-lg font-bold text-[#333]">Product information</h3>
                    <ul className="mt-6 space-y-6 uppercase text-[#333]">
                        <li className="text-sm">Name <span className="ml-4 float-right">{ name }</span></li>
                        <li className="text-sm">Model <span className="ml-4 float-right">{ model }</span></li>
                        <li className="text-sm">Brand <span className="ml-4 float-right">{ brand }</span></li>
                        <li className="text-sm">Manufacturer <span className="ml-4 float-right">{ manufacturer }</span></li>
                        <li className="text-sm">Assembly <span className="ml-4 float-right">{ assembly }</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Machine;