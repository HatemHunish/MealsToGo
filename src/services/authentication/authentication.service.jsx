import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
export const loginRequest = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
