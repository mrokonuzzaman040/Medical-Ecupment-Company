import React from 'react';
import Header from '../Common/Header/Header';

const Branch = () => {
    return (
        <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
            <Header text="Branches" />
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-gray-600 font-sans">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono text-xl italic">Head office </time>
                        <div className="text-md font-black">16/1-C, Commissioner Road, Kallyanpur, Dhaka-1216</div>
                        <span>Phone : 01894857501</span>
                        <br />
                        <span>Email : <a href="mailto:khanbiotechltd@gmail.com">khanbiotechltd@gmail.com</a></span>
                    </div>
                    <hr />
                </li>

                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono text-xl italic">Rajshahi office </time>
                        {/* <div className="text-md font-black"></div> */ }
                        <br />
                        <span>Phone : +880 1763-554004</span>
                        <br />
                        <span>Email : <a href="mailto:khanbiotechltd@gmail.com">khanbiotechltd@gmail.com</a></span>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono text-xl italic">Pabna & Sirajgang office </time>
                        <br />
                        <span>Phone : 019-788-57503</span>
                        <br />
                        <span>Email : <a href="mailto:khanbiotechltd@gmail.com">khanbiotechltd@gmail.com</a></span>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default Branch;