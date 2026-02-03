// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <--- 1. เพิ่มบรรทัดนี้

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAh2903KELNl6CIuzjiww8zAo9TOaijm0",
  authDomain: "lab6mobile.firebaseapp.com",
  projectId: "lab6mobile",
  storageBucket: "lab6mobile.firebasestorage.app",
  messagingSenderId: "179167941370",
  appId: "1:179167941370:web:8bf78360dceba904a1af43",
  measurementId: "G-9L9TJQJE7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Export it
export const db = getFirestore(app); // <--- 2. เพิ่มบรรทัดนี้สำคัญที่สุด!