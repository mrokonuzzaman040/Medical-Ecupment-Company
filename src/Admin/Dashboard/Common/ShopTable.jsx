import React from 'react';
import usePublicApi from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { IoReload } from "react-icons/io5";

const ShopTable = ( { api } ) => {
    const axiosPublic = usePublicApi();

    const { data: product = [], isPending: loading, refetch }
        = useQuery( {
            queryKey: [ 'product' ],
            queryFn: async () => {
                const res = await axiosPublic.get( `${api}` );
                return res.data;
            }
        } );

    const deleteMachine = async ( id ) => {
        try {
            Swal.fire( {
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            } ).then( async ( result ) => {
                if ( result.isConfirmed ) {
                    // Make delete request to delete the product
                    await axiosPublic.delete( `${api}/${id}` );
                    // Refetch the data to update the product list
                    refetch();
                    Swal.fire( {
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        icon: 'success',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    } );
                }
            } );
        } catch ( error ) {
            console.log( error );
        }
    };

    if ( loading ) {
        return <>
            <div className="min-h-full flex flex-col bg-white border shadow-sm rounded-xl">
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

    console.log( product );

    return (
        <div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-4">
                <div className="flex justify-end mb-4">
                    <button onClick={ () => refetch() } className="bg-blue-500 flex items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <span className='mr-2'><IoReload /> </span>Reload
                    </button>
                </div>
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Image</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Brand</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Country Origin</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Price</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Discount Price</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Specification</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { product.map( ( machine, index ) => (
                            <tr key={ index }>
                                <td className="px-6 py-4 lg:w-32 whitespace-nowrap">
                                    <img src={ machine.image } alt={ machine.name } className="w-20 h-20 object-cover" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{ machine.name }</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ machine.brand }</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ machine.countryorigin }</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ machine.price }</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ machine.discountprice }</td>
                                <td className="px-6 py-4 whitespace-nowrap">{ machine.specification }</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="text-red-500 hover:text-red-700" onClick={ () => deleteMachine( machine.id ) }>Delete</button>
                                </td>
                            </tr>
                        ) ) }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShopTable;