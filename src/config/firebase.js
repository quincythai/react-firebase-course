import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFI3LtExa5-9rIsPrsxV6LuDv-ysuS8lw",
  authDomain: "fir-course-b66dd.firebaseapp.com",
  projectId: "fir-course-b66dd",
  storageBucket: "fir-course-b66dd.appspot.com",
  messagingSenderId: "432499230082",
  appId: "1:432499230082:web:ab0b97b8d0ca815ff33b9b",
  measurementId: "G-Z1CCPF23S5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);