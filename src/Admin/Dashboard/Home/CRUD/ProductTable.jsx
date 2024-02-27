import React from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import usePublicApi from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const ProductTable = ( { api } ) => {
    const axiosPublic = usePublicApi();
    const { data: product = [], isPending: loading, refetch }
        = useQuery( {
            queryKey: [ 'product' ],
            queryFn: async () => {
                const res = await axiosPublic.get( `${api}` );
                return res.data;
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
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Reagent Name</th>
                            <th>Pack Size</th>
                            <th>Test</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{ product.id }</th>
                            <td>{ product.name }</td>
                            <td>{ product.pksize }</td>
                            <td>{ product.test }</td>
                            <td>{ product.brand }</td>
                            <td>
                                <button onClick={ () => deleteproduct( product.id ) } className="btn btn-danger">
                                    <MdOutlineDeleteOutline />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Reagent Name</th>
                            <th>Pack Size</th>
                            <th>Test</th>
                            <th>Brand</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;