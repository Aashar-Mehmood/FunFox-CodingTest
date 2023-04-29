import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCWTn1e658Vl-LRX4nYRQMt24CK89Xe4P8",
  authDomain: "cmpnd-dev.firebaseapp.com",
  projectId: "cmpnd-dev",
  storageBucket: "cmpnd-dev.appspot.com",
  messagingSenderId: "869936960863",
  appId: "1:869936960863:web:448077b2ae56437ae012ea",
  measurementId: "G-D22SX3CJW1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
setPersistence(firebaseAuth, browserLocalPersistence);
