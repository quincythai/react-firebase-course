import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        type="text"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
        type="password"
      />
      <button onClick={signIn}>Sign in</button>

      <button onClick={signInWithGoogle}>Sign in with Google</button>

      <button onClick={logout}>Logout</button>
    </div>
  );
};
