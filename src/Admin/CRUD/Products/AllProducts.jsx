import React, { useEffect, useState } from 'react';
import usePublicApi from '../../AxiosHandeler/usePublicApi';
import { useQuery } from '@tanstack/react-query';
import AddProduct from '../AddProduct';


const AllProducts = () => {
    const axiosPublic = usePublicApi();
    const { data: products = [], isPending: loading, refetch }
        = useQuery( {
            queryKey: [ 'product' ],
            queryFn: async () => {
                const res = await axiosPublic.get( '/reagents' );
                return res.data; // Load only 4 data
            }
        } )

    if ( loading ) {
        return <>
            <div className="min-h-60 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                    <div className="flex justify-center">
                        <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }

    const deleteproduct = async ( id ) => {
        const confirmed = window.confirm( "Are you sure you want to delete this product?" );
        if ( confirmed ) {
            try {
                // Make delete request to delete the product
                await axiosPublic.delete( `/reagents/${id}` );
                // Refetch the data to update the product list
                refetch();
            } catch ( error ) {
                console.error( "Error deleting product:", error );
            }
        }
    };

    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <AddProduct />
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Id</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Category</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Package Size</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Test</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Brand</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { products.map( ( product, index ) => (
                                    <tr key={ product.id }>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{ index + 1 }</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-start px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{ product.catagory }</div>
                                        </td>
                                        <td className="text-start px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{ product.name }</div>
                                        </td>
                                        <td className="text-start px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{ product.packSize }</div>
                                        </td>
                                        <td className="text-start px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{ product.test }</div>
                                        </td>
                                        <td className="text-start px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{ product.brand }</div>
                                        </td>
                                        <td className="text-start px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button onClick={ () => deleteproduct( product.id ) } className="text-red-600 hover:text-red-900">Delete</button>
                                        </td>
                                    </tr>
                                ) ) }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;