import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnNoOB3sIJUOIy0tMAmf6-GECbA4vhndg",
    authDomain: "marketplace-medicamentos.firebaseapp.com",
    projectId: "marketplace-medicamentos",
    storageBucket: "marketplace-medicamentos.firebasestorage.app",
    messagingSenderId: "114434882535",
    appId: "1:114434882535:web:4c535f3993719e41b1db42",
    measurementId: "G-LS12DT2S65"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);