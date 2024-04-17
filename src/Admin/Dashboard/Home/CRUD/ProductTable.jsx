import React from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import usePublicApi from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';


import { IoReload } from "react-icons/io5";


const ProductTable = ( { api } ) => {
    const axiosPublic = usePublicApi();
    const { data: product = [], isPending: loading, refetch }
        = useQuery( {
            queryKey: [ 'product' ],
            queryFn: async () => {
                const res = await axiosPublic.get( `${api}` );
                return res.data;
            }
        } );

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
                try {
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
                    } )
                } catch ( error ) {
                    console.error( "Error deleting product:", error );
                }
            }
        }
        )
    };

    return (
        <div>
            <div className="overflow-x-auto ">
                <div className="flex justify-end mb-4">
                    <button onClick={ () => refetch() } className="bg-blue-500 flex items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <span className='mr-2'><IoReload /> </span>Reload
                    </button>
                </div>
                <table className="table table-xs w-full">
                    <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th className="px-4 py-3">Id</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Pack Size</th>
                            <th className="px-4 py-3">Test</th>
                            <th className="px-4 py-3">Brand</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {
                            product.map( ( product ) => (
                                <tr className="text-gray-700" key={ product.id }>
                                    <td className="px-4 py-3 text-sm border">{ product.id }</td>
                                    <td className="px-4 py-3 border">
                                        <div className="flex items-center text-sm">
                                            <p className="font-semibold text-black">{ product.name }</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-ms font-semibold border">{ product.packSize }</td>
                                    <td className="px-4 py-3 text-xs border">
                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> { product.test } </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm border">{ product.brand }</td>
                                    <td className="px-4 py-3 text-sm border">
                                        <button onClick={ () => deleteproduct( product.id ) } className="text-red-600 text-xl  hover:text-red-900">
                                            <MdOutlineDeleteOutline />
                                        </button>
                                    </td>
                                </tr>
                            ) )
                        }
                    </tbody>
                    <tfoot>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th className="px-4 py-3">Id</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Pack Size</th>
                            <th className="px-4 py-3">Test</th>
                            <th className="px-4 py-3">Brand</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div >
    );
};

export default ProductTable;