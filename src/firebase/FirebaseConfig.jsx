// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyATsh9Pt6k3sB-1r9vw1Wbybi5XWyZH2Vs",
  authDomain: "myblog-de37c.firebaseapp.com",
  projectId: "myblog-de37c",
  storageBucket: "myblog-de37c.appspot.com",
  messagingSenderId: "595983899218",
  appId: "1:595983899218:web:fb8080950212c951cf1d8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}