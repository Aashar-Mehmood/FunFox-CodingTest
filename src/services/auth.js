import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "../firebase";

export async function userSignup(email, password) {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
}

export async function userLogin(email, password) {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
}

export async function userLogout() {
  await signOut(firebaseAuth);
}
