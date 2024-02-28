import axios from 'axios';

const axiosPublic = axios.create( {
    baseURL: 'https://api.khanbiotech.com/api/',
} );

const usePublicApi = () => {
    return axiosPublic;
};

export default usePublicApi;

