import React, { useState } from 'react';
import useAxiosImage from '../../../../Hooks/useAxiosImage';
import usePublicApi from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const AddShopProduct = () => {
    const publicApi = usePublicApi();
    const imageApi = useAxiosImage();
    const [ image, setImage ] = useState( '' );
    const [ pdf, setPdf ] = useState( '' );

    const [ imgUrl, setImgUrl ] = useState( '' );
    const [ pdfUrl, setPdfUrl ] = useState( '' );

    const [ uploadProgress, setUploadProgress ] = useState( 0 );
    const [ uploadPdfProgress, setUploadPdfProgress ] = useState( 0 );


    return (
        <div className='flex lg:flex-row-reverse sm:flex-col justify-between items-center bg-slate-300 p-10 rounded-lg w-full'>
            <div className="flex sm:flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 p-5 rounded-xl">
                    <div className="flex items-center justify-center">
                        <img className='w-24 bg-black rounded-full' src={ imgUrl } alt="" />
                    </div>
                    <div className="flex items-center justify-between">
                        <input type="file" name='catalog' className='' onChange={ ( e ) => setImage(
                            // @ts-ignore
                            e.target.files[ 0 ] ) } />
                        {
                            uploadProgress > 0 && uploadProgress < 100 ?
                                <progress className="progress progress-warning w-56" value={ uploadProgress } max="100"></progress>
                                :
                                <button disabled={ imgUrl !== '' } onClick={ () => {
                                    // uploadImage()
                                } } className="btn btn-accent">Upload</button>
                        }
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center justify-center">
                        <img className='w-24 bg-black rounded-full' src={ pdfUrl } alt="" />
                    </div>
                    <div className="flex items-center justify-between  p-5 rounded-xl">
                        <input type="file" name='catalog' className='' onChange={ ( e ) => setPdf(
                            // @ts-ignore
                            e.target.files[ 0 ] ) } />
                        {
                            uploadPdfProgress > 0 && uploadPdfProgress < 100 ?
                                <progress className="progress progress-warning w-56" value={ uploadPdfProgress } max="100"></progress>
                                :
                                <button
                                    // onClick={ () => { uploadPdf() } } 
                                    className="btn btn-accent" disabled={ pdfUrl !== '' }>Upload</button>
                        }
                    </div>
                </div>
            </div>

            <div className="">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-4 lg:gap-2 items-center">
                    <div className="">
                        <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Name</label>
                        <input type="text" placeholder="Name" className="border border-gray-400 p-2 rounded" />
                    </div>
                    <div className="">
                        <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Brand</label>
                        <input type="text" placeholder="Brand" className="border border-gray-400 p-2 rounded" />
                    </div>
                    <div className="">
                        <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Country of Origin</label>
                        <input type="text" placeholder="Country of Origin" className="border border-gray-400 p-2 rounded" />
                    </div>
                    <div className="">
                        <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Normal Price</label>
                        <input type="text" placeholder="Normal Price" className="border border-gray-400 p-2 rounded" />
                    </div>
                    <div className="">
                        <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Discount Price</label>
                        <input type="text" placeholder="Discount Price" className="border border-gray-400 p-2 rounded" />
                    </div>
                    <div className="">
                        <label htmlFor="hs-validation-name-error" className="block text-sm  mb-1 font-bold">Stock</label>
                        <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="This is a textarea placeholder"></textarea>
                    </div>

                </div>
                <button
                    // onClick={ () => addMachine() }
                    className="btn btn-accent w-full mt-3">
                    Add to Shop
                </button>
            </div>
        </div>
    )
};

export default AddShopProduct;