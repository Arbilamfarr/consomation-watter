// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
