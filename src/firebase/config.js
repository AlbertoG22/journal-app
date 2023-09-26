// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWpCm8Ak6eXWfeNWqcPrdryD9XVzLRHOQ",
  authDomain: "react-course-fherrera.firebaseapp.com",
  projectId: "react-course-fherrera",
  storageBucket: "react-course-fherrera.appspot.com",
  messagingSenderId: "295838913362",
  appId: "1:295838913362:web:5fdf127db863b2014a608b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
