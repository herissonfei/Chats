// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFiNRZJTvYklX0qnhqa7nxNDHnc-5SrnE",
  authDomain: "chat-de0d7.firebaseapp.com",
  projectId: "chat-de0d7",
  storageBucket: "chat-de0d7.appspot.com",
  messagingSenderId: "382771097661",
  appId: "1:382771097661:web:994ee39786ea168487fa54",
  measurementId: "G-MXNCZZS18X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
