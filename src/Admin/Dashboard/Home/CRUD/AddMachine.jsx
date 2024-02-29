import React from 'react';
import usePublicApi from '../../../../Hooks/useAxiosPublic';

const AddMachine = ( { api } ) => {
    const axiosPublic = usePublicApi();



    return (
        <>
            <div className="container">
                <form className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
                    <div className="mb-4">
                        <label htmlFor="machineName" className="block text-gray-700">Machine Name</label>
                        <input type="text" className="p-2 rounded-md text-gray-700 form-input mt-1 block w-full" id="machineName" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="machineModel" className="block text-gray-700">Machine Model</label>
                        <input type="text" className="p-2 rounded-md text-gray-700 form-input mt-1 block w-full" id="machineModel" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="machineBrand" className="block text-gray-700">Machine Brand</label>
                        <input type="text" className="p-2 rounded-md text-gray-700 form-input mt-1 block w-full" id="machineBrand" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="machineManufacturer" className="block text-gray-700">Machine Manufacturer</label>
                        <input type="text" className="p-2 rounded-md text-gray-700 form-input mt-1 block w-full" id="machineManufacturer" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="machineAssembly" className="block text-gray-700">Machine Assembly</label>
                        <input type="text" className="p-2 rounded-md text-gray-700 form-input mt-1 block w-full" id="machineAssembly" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="machineImage" className="block text-gray-700">Machine Image</label>
                        <input type="file" className="p-2 rounded-md text-gray-700 form-input mt-1 block w-full" id="machineImage" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="machineDescription" className="block text-gray-700">Machine Description</label>
                        <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                    </div>
                </form>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </div>
        </>
    );
};

export default AddMachine;