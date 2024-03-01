import React from 'react';

const SliderComponent = ( { name, company, img } ) => {
    return (
        <div className="flex justify-center items-center lg:px-10 mt-20 px-4">
            <div className="w-full md:w-1/2 lg:w-1/3 hover:shadow-indigo-300 hover:shadow-lg rounded-lg border">
                <div className="flex justify-center items-start flex-col p-5 ">

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        className="icon icon-tabler icon-tabler-quote rotate-180 text-sky-500" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5">
                        </path>
                    </svg>

                    <div className="flex justify-center items-start flex-col text-left gap-5">
                        <p className="italic text-sm md:text-base">
                            <img src={ img } alt="" />
                        </p>
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold">{ name }</h3>
                            <p className="text-xs md:text-sm">{ company }</p>
                        </div>
                    </div>

                </div>
                <div className="bg-sky-500 p-0.5 rounded-b-lg"></div>
            </div>
        </div>
    );
};

export default SliderComponent;