import React from 'react';

const About = () => {
    return (
        <div className=' max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-col items-center justify-center'>
            <div className="sm:flex items-center justify-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img className='rounded-full w-1/2' src="./about/admin.png" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
                        </h2>
                        <p className="text-gray-700">
                            At first all credit goes to almighty Allah, I wish everything is well. Now this time we
                            follow some different things and include in our company for better service to all of
                            our valuable customers. We committed about it that is when you become customer
                            of our company then our service team ready to support like shadow from that time.
                            Our mainly focus about after sale service and ensure products quality with
                            reasonable price.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:flex items-center max-w-screen-xl flex-row-reverse">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="./about/service.png" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">What service We provide</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Service</span>
                        </h2>
                        <p className="text-gray-700">
                            You think we are new, but our team is most talented, skilled and active in the
                            marketplace. Our growth is increasing day by day for our better service and best
                            quality products. We have emergency service team for you, and never had you
                            harassed from us about price rate in that time. So that, we are committed better
                            service to our all of valuable customers. If you want, we are always with you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;