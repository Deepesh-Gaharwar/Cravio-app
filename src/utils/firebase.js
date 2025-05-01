
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3OR0dRHSk7rnqviN0yIpMcQt3y9fag7Q",
    authDomain: "foodie-app-6b109.firebaseapp.com",
    projectId: "foodie-app-6b109",
    storageBucket: "foodie-app-6b109.firebasestorage.app",
    messagingSenderId: "781917899809",
    appId: "1:781917899809:web:f2d4a9649b3a473700e760"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(); // helps to register the user
export const db = getFirestore(app);
export default app;
