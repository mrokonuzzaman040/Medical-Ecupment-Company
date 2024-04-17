import axios from 'axios';

const axiosImageApi = axios.create( {
    baseURL: 'https://api.khanbiotech.com/upload',
    // baseURL: 'http://localhost:5000/',
} );

const useImageApi = () => {
    return axiosImageApi;
};

export default useImageApi;

