import axios from "axios";

const axiosImageUpload = axios.create( {
    baseURL: "https://api.khanbiotech.com/",
} );

const useUploadImage = () => {
    return axiosImageUpload;
};

export default useUploadImage;