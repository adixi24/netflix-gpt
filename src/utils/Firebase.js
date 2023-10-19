// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaUiggbHJlTNhkU5LCuEk2UMIIWkyP23c",
  authDomain: "netflixgpt-9c282.firebaseapp.com",
  projectId: "netflixgpt-9c282",
  storageBucket: "netflixgpt-9c282.appspot.com",
  messagingSenderId: "298177998646",
  appId: "1:298177998646:web:0de329f9ecb4cd2ec58d97",
  measurementId: "G-RB80GE096L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
