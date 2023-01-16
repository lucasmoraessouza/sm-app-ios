import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyC0dicTwDMLCE8NDgDWY9b1CT2ge1wth9s",
  authDomain: "chatapp-df3f2.firebaseapp.com",
  projectId: "chatapp-df3f2",
  storageBucket: "chatapp-df3f2.appspot.com",
  messagingSenderId: "437860617401",
  appId: "1:437860617401:web:9f42477d2e16abd9639f68",
  measurementId: "G-3PHQRDX3S9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore();
