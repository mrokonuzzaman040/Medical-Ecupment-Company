import React, { useState } from 'react';
import useAxiosImage from '../../../../Hooks/useAxiosImage';

const AddMachine = ( { api } ) => {
    const imageApi = useAxiosImage();
    const [ image, setImage ] = useState( '' );



    const uploadImage = async () => {
        const formData = new FormData();
        formData.append( 'image', image );
        try {
            const res = await imageApi.post( '/images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': 'http://localhost:5173'
                }
            } );
            console.log( res );
        } catch ( error ) {
            console.log( error );
        }
    }
    return (
        <>
            <div className="flex sm:flex-col p-4 gap-4">
                <div className="flex items-center justify-between bg-gray-400 p-5 rounded-xl">
                    <img src="" alt="" />
                    <input type="file" name='catalog' className='' onChange={ ( e ) => setImage( e.target.files[ 0 ] ) } />
                    <button onClick={ () => {
                        uploadImage()
                    } } className="btn btn-accent">Upload</button>
                </div>

                <div className="flex items-center justify-between bg-gray-400 p-5 rounded-xl">
                    <img src="" alt="" />
                    <input type="file" name='catalog' className='' />
                    <button className="btn btn-accent">Upload</button>
                </div>
            </div>
            <div className="">
                {/* add nname, model, brand, manufacturer, assembly */ }

            </div>
        </>
    );
};

export default AddMachine;