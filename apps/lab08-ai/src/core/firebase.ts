import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCAh2903KELNl6CIuzjiww8zAo9TOaijm0",
  authDomain: "lab6mobile.firebaseapp.com",
  projectId: "lab6mobile",
  storageBucket: "lab6mobile.firebasestorage.app",
  messagingSenderId: "179167941370",
  appId: "1:179167941370:web:8bf78360dceba904a1af43",
  measurementId: "G-9L9TJQJE7P"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);