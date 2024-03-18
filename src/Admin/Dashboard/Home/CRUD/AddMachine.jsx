import React, { useState } from 'react';
import useAxiosImage from '../../../../Hooks/useAxiosImage';
import usePublicApi from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

// @ts-ignore
// @ts-ignore
const AddMachine = ( { api } ) => {
    const publicApi = usePublicApi();
    const imageApi = useAxiosImage();
    const [ image, setImage ] = useState( '' );
    const [ pdf, setPdf ] = useState( '' );

    const [ imgUrl, setImgUrl ] = useState( '' );
    const [ pdfUrl, setPdfUrl ] = useState( '' );

    const [ uploadProgress, setUploadProgress ] = useState( 0 );
    const [ uploadPdfProgress, setUploadPdfProgress ] = useState( 0 );


    const uploadImage = async () => {
        const formData = new FormData();
        formData.append( 'image', image );
        try {
            const res = await imageApi.post( '/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ( progressEvent ) => {
                    // @ts-ignore
                    const progress = Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 );
                    setUploadProgress( progress );
                }
            } );
            setImgUrl( res.data.profile_url );
        } catch ( error ) {
            console.log( error );
        }
    }

    const uploadPdf = async () => {
        const formData = new FormData();
        formData.append( 'file', pdf );
        try {
            const res = await imageApi.post( '/file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ( progressEvent ) => {
                    // @ts-ignore
                    const progress = Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 );
                    setUploadPdfProgress( progress );
                }
            } );
            setPdfUrl( res.data.file_url );
        } catch ( error ) {
            console.log( error );
        }
    }

    const addMachine = async () => {
        const Name = document.querySelector( 'input[placeholder="Name"]' );
        const Model = document.querySelector( 'input[placeholder="Model"]' );
        const Brand = document.querySelector( 'input[placeholder="Brand"]' );
        const Manufacturer = document.querySelector( 'input[placeholder="Manufacturer"]' );
        const Assembly = document.querySelector( 'input[placeholder="Assembly"]' );

        // @ts-ignore
        const name = Name?.value;
        // @ts-ignore
        const model = Model?.value;
        // @ts-ignore
        const brand = Brand?.value;
        // @ts-ignore
        const manufacturer = Manufacturer?.value;
        // @ts-ignore
        const assembly = Assembly?.value;

        const data = {
            name,
            model,
            brand,
            manufacturer,
            assembly,
            image: imgUrl,
            pdf: pdfUrl
        }

        try {
            const res = await publicApi.post( `${api}`, data );
            console.log( res );
            // @ts-ignore
            Swal.fire( {
                title: 'Machine Added',
                icon: 'success'
            } );
        } catch ( error ) {
            console.log( error );
        }

        // reset the form
        Name.value = '';
        Model.value = '';
        Brand.value = '';
        Manufacturer.value = '';
        Assembly.value = '';
        setImgUrl( '' );
        setPdfUrl( '' );

        
    }

    console.log( uploadPdfProgress )

    return (
        <>
            <div className="flex sm:flex-col p-4 gap-4">

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
                                    uploadImage()
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
                                <button onClick={ () => { uploadPdf() } } className="btn btn-accent" disabled={ pdfUrl !== '' }>Upload</button>
                        }
                    </div>
                </div>
            </div>

            <div className="">
                <div className="grid grid-cols-5 gap-4">
                    <input type="text" placeholder="Name" className="border border-gray-400 p-2 rounded" />
                    <input type="text" placeholder="Model" className="border border-gray-400 p-2 rounded" />
                    <input type="text" placeholder="Brand" className="border border-gray-400 p-2 rounded" />
                    <input type="text" placeholder="Manufacturer" className="border border-gray-400 p-2 rounded" />
                    <input type="text" placeholder="Assembly" className="border border-gray-400 p-2 rounded" />
                    <button onClick={ () => addMachine() } className="btn btn-accent">Add</button>
                </div>
            </div>
        </>
    )
};

export default AddMachine;