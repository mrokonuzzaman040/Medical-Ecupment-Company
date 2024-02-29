import axios from 'axios';

const axiosPublic = axios.create( {
    baseURL: 'https://api.khanbiotech.com/upload',
} );

const usePublicApi = () => {
    return axiosPublic;
};

export default usePublicApi;

