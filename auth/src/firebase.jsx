// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNE1duwA0LsdhwNLh6oS8qOwFTVCBOg3Q",
  authDomain: "authwithreact-5aa93.firebaseapp.com",
  projectId: "authwithreact-5aa93",
  storageBucket: "authwithreact-5aa93.firebasestorage.app",
  messagingSenderId: "964358623068",
  appId: "1:964358623068:web:f173c4b72b6cb8fdce3b99",
  measurementId: "G-4BNFH8F2TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
 export const db=getFirestore(app)