import axios from 'axios';

const axiosPublic = axios.create( {
    baseURL: 'https://api.khanbiotech.com/api/',
    // baseURL: 'http://localhost:5000/api/',
} );

const usePublicApi = () => {
    return axiosPublic;
};

export default usePublicApi;

