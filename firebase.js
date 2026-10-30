import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOWeyjxwB0CN7RXfEiDv4p-FjNtPACDWg",
  authDomain: "rn-todo-app-6a853.firebaseapp.com",
  projectId: "rn-todo-app-6a853",
  storageBucket: "rn-todo-app-6a853.firebasestorage.app",
  messagingSenderId: "588059857766",
  appId: "1:588059857766:web:7358a1f6d62758935eaea7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
