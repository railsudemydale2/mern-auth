
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4b709.firebaseapp.com",
  projectId: "mern-auth-4b709",
  storageBucket: "mern-auth-4b709.appspot.com",
  messagingSenderId: "1052177974580",
  appId: "1:1052177974580:web:f1b2c9c6a3ca2f10381161"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


