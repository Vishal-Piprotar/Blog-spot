
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa8IPMyuj5O8sIbUlmsFy0YgM2PH7z1SY",
  authDomain: "blog-application-mern.firebaseapp.com",
  projectId: "blog-application-mern",
  storageBucket: "blog-application-mern.appspot.com",
  messagingSenderId: "587991180539",
  appId: "1:587991180539:web:0c892f81209b29e2dcbc5e",
  measurementId: "G-37FJLDB27S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
