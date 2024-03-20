import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import usePublicApi from '../../Hooks/useAxiosPublic';

const Shop = () => {
    const axiosPublic = usePublicApi();
    const { data: product = [], isPending: loading, refetch }
        = useQuery( {
            queryKey: [ 'product' ],
            queryFn: async () => {
                const res = await axiosPublic.get( '/shopitems' );
                return res.data;
            }
        } );

    if ( loading ) {
        return <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        </div>;
    }

    return (
        <div>
            <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    { product.map( ( product, index ) => (
                        <Link to={ `/itemDetails/${product.id}` } key={ index }>
                            <div className='border p-4 rounded-xl shadow-lg'>
                                {
                                    product.imageurls &&
                                    <img src={ JSON.parse( product.imageurls )[ 0 ] } alt={ product.name } className='w-full h-60 object-contain rounded-lg' />
                                }
                                <h1 className='text-xl font-bold'>{ product.name }</h1>
                                <p className='text-lg font-semibold text-gray-600'>{ product.brand }</p>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-xl font-semibold'><span className='text-sm'>৳</span>{ product.discountprice }</p>
                                    <p className='text-lg font-semibold line-through text-red-600'><span className='text-sm'>৳</span>{ product.price }</p>
                                </div>
                            </div>
                        </Link>
                    ) ) }
                </div>
            </div>
        </div>
    );
};

export default Shop;