
import firebase from "firebase/compat/app";
//auth
import {getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { appBarClasses } from "@mui/material";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhgXJUyzKj4-iWL-gzBfKu2VGpKFAoJl8",
  authDomain: "clone-23786.firebaseapp.com",
  projectId: "clone-23786",
  storageBucket: "clone-23786.appspot.com",
  messagingSenderId: "150032847885",
  appId: "1:150032847885:web:bbeb9ffc1835466f107144",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore();
