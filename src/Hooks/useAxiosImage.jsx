import axios from 'axios';

const axiosImageApi = axios.create( {
    baseURL: 'https://api.khanbiotech.com/upload',
} );

const useImageApi = () => {
    return axiosImageApi;
};

export default useImageApi;

