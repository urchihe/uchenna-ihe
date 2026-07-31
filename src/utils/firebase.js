// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNxsyo3hhe2BJVx7N45ODn8z_hRQrMzuc",
    authDomain: "uchenna-ihe-profile.firebaseapp.com",
    projectId: "uchenna-ihe-profile",
    storageBucket: "uchenna-ihe-profile.appspot.com",
    messagingSenderId: "164510379185",
    appId: "1:164510379185:web:2d3d371884944373a28690",
    measurementId: "G-Y6FB6K4FJ3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
