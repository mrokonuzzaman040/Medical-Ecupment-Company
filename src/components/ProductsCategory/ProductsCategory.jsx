import React from 'react';
import Header from '../../webcomponents/Carts/Header';
import { config } from '../../../config';
import usePublicApi from '../../Admin/AxiosHandeler/usePublicApi';

import { TiTick } from "react-icons/ti";


const ProductsCategory = () => {
    const [ data, setData ] = React.useState( [] );
    const [ loading, setLoading ] = React.useState( true );
    const PublicApi = usePublicApi();

    PublicApi.get( '/reagents' )
        .then( ( response ) => {
            setData( response.data );
            setLoading( false );
        } )
        .catch( ( error ) => {
            console.log( error );
        } );

    if ( loading ) {
        return (
            <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                <Header titel="Reagent" />
                <div className="flex justify-center items-center h-96">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            </div>
        );
    }

    return (
        <div className='w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto'>
            <Header titel="Reagent" />
            <div className="">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Category</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Reagent Name</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Pack Size</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Test</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map( ( reagent, index ) => {
                                                return (
                                                    <tr key={ index } className="bg-white dark:bg-gray-800">
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">
                                                                    <TiTick className="h-10 w-10 text-indigo-400" />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900 dark:text-gray-200">{ reagent.category }</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900 dark:text-gray-200">{ reagent.name }</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900 dark:text-gray-200">{ reagent.packSize }</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <p className="text-indigo-400 hover:text-indigo-900">{ reagent.test }</p>
                                                        </td>
                                                    </tr>
                                                );
                                            } )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCategory;