import React from 'react';
import ReactStars from 'react-stars';
import { config } from '../../../config';

const OurClients = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800">Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600">What our clients say about us</p>
        </div>
        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 transition-transform transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
                />
                <h3 className="mt-4 text-2xl font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-indigo-500 uppercase mt-1">
                  {testimonial.degination}
                </p>
                <div className="mt-2">
                  <ReactStars
                    count={5}
                    value={testimonial.rating}
                    size={24}
                    color2="#ffd700"
                  />
                </div>
                <p className="mt-4 text-gray-600 italic text-center">
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
