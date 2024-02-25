import axios from "axios";

const axiosPublic = axios.create( {
    baseURL: 'http://localhost:8080/api/',
} );

const usePublicApi = () => {
    return axiosPublic;
};

export default usePublicApi;

