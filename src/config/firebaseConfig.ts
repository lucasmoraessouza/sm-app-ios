import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from 'firebase/auth'


export const firebaseConfig = {
    apiKey: "AIzaSyC4BiPpJPTT0U7KebPtKV25BDJd-a27y3c",
    authDomain: "stacked-messenger-dev.firebaseapp.com",
    projectId: "stacked-messenger-dev",
    storageBucket: "stacked-messenger-dev.appspot.com",
    messagingSenderId: "95270505636",
    appId: "1:95270505636:web:9fbb1e6dd4af1c31112a31",
    measurementId: "G-6PYHW0E2ZE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
