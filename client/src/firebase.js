// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-778cc.firebaseapp.com",
  projectId: "mern-blog-778cc",
  storageBucket: "mern-blog-778cc.appspot.com",
  messagingSenderId: "591933879466",
  appId: "1:591933879466:web:20e978f2ed473ae451ccd3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
