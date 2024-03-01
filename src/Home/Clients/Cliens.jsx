import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { config } from '../../../config';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import required modules
import Header from '../Common/Header/Header';
import SliderComponent from './SliderComponent';

const Cliens = () => {
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

        <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
            <Header text="Our Clients" />
            <div className="">
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
                    className="mySwiper rounded-b-xl text-gray-700 overflow-hidden shadow-lg w-auto h-auto relative"
                >
                    {
                        config.testimonials.map( ( item, index ) => (
                            <SwiperSlide key={ index }>
                                <SliderComponent name={ item.name } company={ item.company } img={ item.image } />
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
            </div >
        </div>
    );
};

export default Cliens;