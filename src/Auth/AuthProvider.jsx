import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { app } from './firebase';
import useAxiosPublic from '../Hooks/useAxiosPublic';



export const AuthContext = createContext( null );

const auth = getAuth( app );

const AuthProvider = ( { children } ) => {
    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( true );

    const createUser = ( email, password ) => {
        setLoading( true );
        return createUserWithEmailAndPassword( auth, email, password );
    }

    const signIn = ( email, password ) => {
        setLoading( true );
        return signInWithEmailAndPassword( auth, email, password );
    }

    const logOut = () => {
        setLoading( true );
        return signOut( auth );
    }

    const axiosPublic = useAxiosPublic();

    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            // @ts-ignore
            setUser( currentUser );
            if ( currentUser ) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post( '/jwt', userInfo )
                    .then( res => {
                        if ( res.data.token ) {
                            localStorage.setItem( 'access-token', res.data.token );
                            setLoading( false );
                        }
                    } )
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem( 'access-token' );
                setLoading( false );
            }

        } );
        return () => {
            return unsubscribe();
        }
    }, [ axiosPublic ] )

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;