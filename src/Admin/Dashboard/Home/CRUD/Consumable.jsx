import React, { useState } from 'react';
import useAxiosImage from '../../../../Hooks/useAxiosImage';
import usePublicApi from '../../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Consumable = ( { api } ) => {
    const publicApi = usePublicApi();
    const imageApi = useAxiosImage();
    const [ image, setImage ] = useState( '' );
    const [ imgUrl, setImgUrl ] = useState( '' );
    const [ uploadProgress, setUploadProgress ] = useState( 0 );


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

    const addMachine = async () => {
        const name = document.querySelector( 'input[ name="name" ]' );
        const packsize = document.querySelector( 'input[ name="packsize" ]' );
        const brandorigin = document.querySelector( 'input[ name="brandorigin" ]' );
        const specification = document.querySelector( 'input[ name="specification" ]' );

        const data = {
            // @ts-ignore
            name: name.value,
            // @ts-ignore
            packsize: packsize.value,
            // @ts-ignore
            brandorigin: brandorigin.value,
            // @ts-ignore
            specification: specification.value,
            image: imgUrl
        };

        try {
            // @ts-ignore
            const res = await publicApi.post( `${api}`, data );
            Swal.fire( 'Success', 'Consumable & Accessories Added', 'success' );
        } catch ( error ) {
            console.log( error );
        }

        // reset the form
        // @ts-ignore
        name.value = '';
        // @ts-ignore
        packsize.value = '';
        // @ts-ignore
        brandorigin.value = '';
        // @ts-ignore
        specification.value = '';
        setImgUrl( '' );
    };
    return (
        <div className='flex lg:flex-row-reverse sm:flex-col justify-between items-center bg-slate-300 p-10 rounded-lg w-full'>
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
            </div>

            <div className="">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-4 lg:gap-2 items-center">
                    <input name='name' type="text" placeholder="Name" className="border border-gray-400 p-2 rounded" />
                    <input name='packsize' type="text" placeholder="PackSize" className="border border-gray-400 p-2 rounded" />
                    <input name='brandorigin' type="text" placeholder="Brand Origin" className="border border-gray-400 p-2 rounded" />
                    <input name='specification' type="text" placeholder="Specification " className="border border-gray-400 p-2 rounded" />
                    <button onClick={ () => addMachine() } className="btn btn-accent">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Consumable;