import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseAuth } from "../firebase";

export async function adminLogin(email, password) {
  await signInWithEmailAndPassword(firebaseAuth, email, password);
}

export async function adminLogout() {
  await signOut(firebaseAuth);
}
