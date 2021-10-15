import React, { useEffect, useState } from 'react';

import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useHistory } from 'react-router';

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();

    const [signedIn, setSignedIn] = useState(0);

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL
                };

                setUser(signedInUser);

            }).catch(err => {
                console.error(err.message);
                setError(err.message);
            })
    };

    useEffect(() => {
        // if the user is signed In then setting the user
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    // update profile for any authentication
    const updateName = name => {
        updateProfile(auth.currentUser, {
            displayName: name,
        });
    }


    // code for email sign in and sign Up
    const signUpUsingEmail = (name, email, password, formElement) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateName(name);
                formElement.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error msg :- ", errorCode, errorMessage);
            });
    };

    const signInUsingEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };


    // signOut for all the signIn
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    return {
        user,
        setUser,
        error,
        signInUsingGoogle,
        signInUsingEmail,
        signUpUsingEmail,
        logout,
        signedIn,
        setSignedIn
    };
};

export default useFirebase;