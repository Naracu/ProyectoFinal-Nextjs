// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAML4e7fuZtb256GbbyTk_B0jo_UAYTu0M",
  authDomain: "mi-proyecto-final-next.firebaseapp.com",
  projectId: "mi-proyecto-final-next",
  storageBucket: "mi-proyecto-final-next.firebasestorage.app",
  messagingSenderId: "377380527701",
  appId: "1:377380527701:web:64fcf860dc8701e9cb3edc",
  measurementId: "G-16414HDT9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);