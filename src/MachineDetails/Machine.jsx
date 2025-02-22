import React from 'react';
import { TiTickOutline } from "react-icons/ti";

const Machine = ({ name, model, brand, manufacturer, assembly, image, pdf }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})`, filter: 'blur(8px)' }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Text Overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wide drop-shadow-lg">
            {name}
          </h1>
          <p className="text-white text-lg sm:text-xl mt-2 font-semibold drop-shadow-md">
            {brand}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="-mt-16 sm:-mt-20 md:-mt-24 px-4 sm:px-6 md:px-8 lg:px-10 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Glass Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Product Image */}
              <div className="flex justify-center md:justify-start">
                <div className="w-full max-w-md">
                  <div className="rounded-2xl overflow-hidden shadow-xl transform transition hover:scale-105">
                    <img src={image} alt={name} className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Right: Product Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
                    Product Details
                  </h2>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <TiTickOutline className="text-green-500 text-2xl mt-1" />
                      <div>
                        <p className="text-sm font-bold uppercase">Name</p>
                        <p className="text-base">{name}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TiTickOutline className="text-green-500 text-2xl mt-1" />
                      <div>
                        <p className="text-sm font-bold uppercase">Model</p>
                        <p className="text-base">{model}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TiTickOutline className="text-green-500 text-2xl mt-1" />
                      <div>
                        <p className="text-sm font-bold uppercase">Brand</p>
                        <p className="text-base">{brand}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TiTickOutline className="text-green-500 text-2xl mt-1" />
                      <div>
                        <p className="text-sm font-bold uppercase">Origin</p>
                        <p className="text-base">{manufacturer}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TiTickOutline className="text-green-500 text-2xl mt-1" />
                      <div>
                        <p className="text-sm font-bold uppercase">Specification</p>
                        <p className="text-base">{assembly}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Download Button */}
                <div className="mt-8">
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full shadow-lg transition-transform duration-200 transform hover:scale-105"
                  >
                    Download Catalog
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="mt-10 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machine;
