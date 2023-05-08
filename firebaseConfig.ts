import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCdPKOCDQNtlbcjcR9NVP9IgAUNrhyMmBM",
    authDomain: "firetodoapp-4aa0c.firebaseapp.com",
    projectId: "firetodoapp-4aa0c",
    storageBucket: "firetodoapp-4aa0c.appspot.com",
    messagingSenderId: "491231341360",
    appId: "1:491231341360:web:7e55332f7c55db5963f6f5"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_BD = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

