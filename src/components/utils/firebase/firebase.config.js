import { initializeApp } from "firebase/app";


import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    //signInWithRedirect
} from 'firebase/auth';

import {
    doc,
    getDoc,
    setDoc,
    getFirestore
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDBziuptDmtlTSDWQINt3lEdW5BnyOIXFY",
    authDomain: "crwn-store-51d70.firebaseapp.com",
    projectId: "crwn-store-51d70",
    storageBucket: "crwn-store-51d70.appspot.com",
    messagingSenderId: "666023789832",
    appId: "1:666023789832:web:7e04589726747d7c4d98bd"
};



const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(firebaseApp);

provider.setCustomParameters({
    prompt: "select_account"
})



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const createUserWithCredentials = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const db = getFirestore();


export const createUserDocFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    //console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        //console.log({ displayName, email, createdAt });
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error message: ', error.message);
        }
    }

    return userDocRef;
}


export const SignOut = async () => await signOut(auth);
export const onUserAuthStateChanged = (callback) => onAuthStateChanged(auth, callback)