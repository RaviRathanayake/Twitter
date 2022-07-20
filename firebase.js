// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "twitter-clone-4e249.firebaseapp.com",
  projectId: "twitter-clone-4e249",
  storageBucket: "twitter-clone-4e249.appspot.com",
  messagingSenderId: "1052475678585",
  appId: "1:1052475678585:web:7ae9ac476924653f4159a8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :getApp();
const db = getFirestore()
const storage = getStorage();
export {app, db, storage}

 