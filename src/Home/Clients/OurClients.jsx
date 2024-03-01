import React from 'react';
import ReactStars from 'react-stars'
import { config } from '../../../config';

const OurClients = () => {
    return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32 text-center">
                <h2 className="mb-12 pb-4 text-center text-3xl font-bold">Testimonials</h2>

                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-12">
                    {
                        config.testimonials.map( ( testimonial, index ) => (
                            <div key={ index } className="mb-6 lg:mb-0">
                                <div
                                    className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                    <div className="flex">
                                        <div
                                            className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <img src={ testimonial.image } className="w-full max-h-64" />
                                            <a href="#!">
                                                <div
                                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="mb-2 text-lg font-bold">{ testimonial.name }</h5>
                                        <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                                            { testimonial.degination }
                                        </h6>
                                        <div className="flex justify-center">
                                            <ReactStars
                                                count={ 5 }
                                                // onChange={ testimonial.rating }
                                                value={ testimonial.rating }
                                                size={ 24 }
                                                color2={ '#ffd700' } />,
                                        </div>
                                        <p>
                                            { testimonial.review }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) )
                    }
                </div>
            </section>
        </div>
    );
};

export default OurClients;