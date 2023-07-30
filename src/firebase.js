import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQnJhuYXvn9KBnHipPjK5agnEboCKGOfE",
  authDomain: "funfox-c6b48.firebaseapp.com",
  projectId: "funfox-c6b48",
  storageBucket: "funfox-c6b48.appspot.com",
  messagingSenderId: "1004701863695",
  appId: "1:1004701863695:web:f3ec3ff55e008aa8d6f87a",
  measurementId: "G-VC8L6CX094",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDb = getFirestore(app);
setPersistence(firebaseAuth, browserLocalPersistence);
