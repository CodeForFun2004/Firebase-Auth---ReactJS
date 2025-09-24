// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADJzBPYl6uHdtEkujPx-sB2WwOtGQ7HUo",
  authDomain: "login-auth-firebase-reac-82cfe.firebaseapp.com",
  projectId: "login-auth-firebase-reac-82cfe",
  storageBucket: "login-auth-firebase-reac-82cfe.firebasestorage.app",
  messagingSenderId: "616759487023",
  appId: "1:616759487023:web:52816e8c2810aa0e82b4da",
  measurementId: "G-1XZSXMKY03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;