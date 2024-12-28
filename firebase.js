// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjajOvMJ4InIoBbtytPlwsgHoSBqjRg3c",
  authDomain: "consomationwatter.firebaseapp.com",
  projectId: "consomationwatter",
  storageBucket: "consomationwatter.appspot.com",
  messagingSenderId: "518874808145",
  appId: "1:518874808145:web:d69045f3e810c0de76dd70",
  measurementId: "G-NXN1WMZ7BH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, createUserWithEmailAndPassword, setDoc, doc,signInWithEmailAndPassword };
