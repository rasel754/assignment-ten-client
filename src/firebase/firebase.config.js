// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA-yFiDMoGVhi06cDdECbEBN2mUvurB3Q",
  authDomain: "assignment-ten-client-deeaa.firebaseapp.com",
  projectId: "assignment-ten-client-deeaa",
  storageBucket: "assignment-ten-client-deeaa.appspot.com",
  messagingSenderId: "193414021372",
  appId: "1:193414021372:web:05b6e05aaf95c769311779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;