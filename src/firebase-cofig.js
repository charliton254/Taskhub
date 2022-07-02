import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig ={
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "auth-development-72818.firebaseapp.com",
    projectId: "auth-development-72818",
    storageBucket: "auth-development-72818.appspot.com",
    messagingSenderId: "839822978047",
    appId: "1:839822978047:web:8a5e1e299d462931efd5ca"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);