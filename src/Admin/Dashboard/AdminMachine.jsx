import React from 'react';
import Header from '../../webcomponents/Carts/Header';

const AdminMachine = () => {
    return (
        <div>
            <Header titel={ 'Machine' } />
            <div className="">
                <form >
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AdminMachine;