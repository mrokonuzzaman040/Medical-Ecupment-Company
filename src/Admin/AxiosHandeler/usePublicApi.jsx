import axios from "axios";

const axiosPublic = axios.create( {
    baseURL: 'http://localhost:3001/api/',
} );

const usePublicApi = () => {
    return axiosPublic;
};

export default usePublicApi;

