import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6e-BwBZRXbgzyPA3NiyeXSmIfKdinKBQ",
  authDomain: "personal-project-a1d26.firebaseapp.com",
  projectId: "personal-project-a1d26",
  storageBucket: "personal-project-a1d26.firebasestorage.app",
  messagingSenderId: "1055272625130",
  appId: "1:1055272625130:web:145ef6affc5e358af58893",
  measurementId: "G-R7R0D6SX8H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
