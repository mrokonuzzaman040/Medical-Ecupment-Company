import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from "./firebase";
import usePublicApi from "../Hooks/useAxiosPublic";
export const AuthContext = createContext( null );
const auth = getAuth( app );

const AuthProvider = ( { children } ) => {
    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = usePublicApi();

    const createUser = ( email, password ) => {
        setLoading( true );
        return createUserWithEmailAndPassword( auth, email, password );
    }

    const signIn = ( email, password ) => {
        setLoading( true );
        return signInWithEmailAndPassword( auth, email, password );
    }

    const googleSignIn = () => {
        setLoading( true );
        return signInWithPopup( auth, googleProvider );
    }

    const logOut = () => {
        setLoading( true );
        return signOut( auth );
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider >
    );
};

export default AuthProvider;