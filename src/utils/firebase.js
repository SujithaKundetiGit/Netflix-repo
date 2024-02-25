// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE9j6oOO3V4Tcu_0rN7Tt7ji7shpCY6sM",
  authDomain: "netflix-chatgpt-ad16c.firebaseapp.com",
  projectId: "netflix-chatgpt-ad16c",
  storageBucket: "netflix-chatgpt-ad16c.appspot.com",
  messagingSenderId: "1610281865",
  appId: "1:1610281865:web:8253f57eaf756ea0b56758",
  measurementId: "G-TZWHN1B69K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();