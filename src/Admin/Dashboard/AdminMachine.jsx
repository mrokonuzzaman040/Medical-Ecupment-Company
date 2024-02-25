import React from 'react';
import Header from '../../webcomponents/Carts/Header';
import usePublicApi from '../AxiosHandeler/usePublicApi';

const AdminMachine = () => {
    const publicApi = usePublicApi();
    const [ imageUrl, setImageUrl ] = React.useState( '' );

    const uploadImage = async ( file ) => {
        const formData = new FormData();
        formData.append( 'image', file );

        try {
            const response = await fetch( '/api/uploadImage', {
                method: 'POST',
                body: formData,
            } );

            if ( response.ok ) {
                const imageUrl = await response.text();
                return imageUrl;
            } else {
                throw new Error( 'Image upload failed' );
            }
        } catch ( error ) {
            console.error( error );
            return null;
        }
    };

    const handleImageUpload = async ( e ) => {
        e.preventDefault();
        const file = e.target.files[ 0 ];
        const imageUrl = await uploadImage( file );
        if ( imageUrl ) {
            e.target[ 5 ].value = imageUrl;
            setImageUrl( imageUrl );
        }

    };

    const addMachine = ( e ) => {
        e.preventDefault();
        const name = e.target[ 0 ].value;
        const details = e.target[ 1 ].value;
        const brand = e.target[ 2 ].value;
        const model = e.target[ 3 ].value;
        const manufacture = e.target[ 4 ].value;
        const image = e.target[ 5 ].value;
        const machine = { name, details, brand, model, manufacture, image };

        publicApi.post( '/addMachine', machine )
            .then( ( response ) => {
                console.log( response );
            } )
            .catch( ( error ) => {
                console.error( error );
            } );
    };

    return (
        <div>
            <Header titel={ 'Machine' } />
            <div className="">
                <form onSubmit={ addMachine } >
                    <div className="form-group">
                        <label htmlFor="name" className="block">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="details" className="block">Details</label>
                        <input type="text" className="form-control" id="details" placeholder="Enter Details" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand" className="block">Brand</label>
                        <input type="text" className="form-control" id="brand" placeholder="Enter Brand" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="model" className="block">Model</label>
                        <input type="text" className="form-control" id="model" placeholder="Enter Model" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="manufacture" className="block">Manufacture</label>
                        <input type="text" className="form-control" id="manufacture" placeholder="Enter Manufacture" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image" className="block">Image</label>
                        <input type="file" className="form-control" id="image" placeholder="Enter Image" />
                    </div>
                    <button onChange={ handleImageUpload } type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AdminMachine;