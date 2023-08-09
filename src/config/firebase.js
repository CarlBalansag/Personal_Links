// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwZVOOZio_-PxUUJkd9cPoNHUqGTmhtpk",
    authDomain: "link-project-182e4.firebaseapp.com",
    projectId: "link-project-182e4",
    storageBucket: "link-project-182e4.appspot.com",
    messagingSenderId: "721774067471",
    appId: "1:721774067471:web:5f6c2d6b4253cd8882c87a",
    measurementId: "G-H008KM2BBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)
