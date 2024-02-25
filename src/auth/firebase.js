// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACKfiXHWLSVwGqXnlQabVrw7RhIAFjC-0",
    authDomain: "khan-biotech.firebaseapp.com",
    projectId: "khan-biotech",
    storageBucket: "khan-biotech.appspot.com",
    messagingSenderId: "855695446790",
    appId: "1:855695446790:web:3d28d59f9eff85f0610487"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );

export default app;