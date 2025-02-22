import React from 'react';
import usePublicApi from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Header from './Common/Header/Header';
import ProductCard from './Product/ProductCard';

const MachineAndEquipment = () => {
  const axiosPublic = usePublicApi();
  const { data: product = [], isPending: loading, refetch } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const res = await axiosPublic.get('/machine');
      return res.data;
    },
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header text="Products" />
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 animate-pulse"
              >
                <div className="h-48 bg-gray-300 rounded-xl"></div>
                <div className="mt-6 space-y-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* <Header text="Machine And Equipment" /> */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Machines & Equipment
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our latest range of high-quality machines and equipment designed for your industrial needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {product.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              brand={item.brand}
              image={item.image}
              link={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachineAndEquipment;
