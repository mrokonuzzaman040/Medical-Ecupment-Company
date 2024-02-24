import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { config } from '../../config';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    const progressCircle = useRef( null );
    const progressContent = useRef( null );
    const onAutoplayTimeLeft = ( s, time, progress ) => {
        // @ts-ignore
        progressCircle.current.style.setProperty( '--progress', 1 - progress );
        if ( progressContent.current ) {
            // @ts-ignore
            progressContent.current.textContent = `${Math.ceil( time / 1000 )}s`;
        }
    };
    return (
        <>
            <Swiper
                spaceBetween={ 30 }
                centeredSlides={ true }
                autoplay={ {
                    delay: 2500,
                    disableOnInteraction: false,
                } }
                pagination={ {
                    clickable: true,
                } }
                navigation={ true }
                modules={ [ Autoplay, Pagination, Navigation ] }
                onAutoplayTimeLeft={ onAutoplayTimeLeft }
                className="mySwiper rounded-xl overflow-hidden shadow-lg w-auto h-auto relative"
            >
                {
                    config.slidercontent.map( ( item, index ) => (
                        <SwiperSlide key={ index }>
                            <div className="">
                                <img src={ item.image } alt={ item.title } className="w-full h-full object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <h2 className="text-2xl font-bold">{ item.title }</h2>
                                        <p>{ item.description }</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ) )
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={ progressCircle }>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={ progressContent }></span>
                </div>
            </Swiper>
        </>
    );
};

export default Slider;