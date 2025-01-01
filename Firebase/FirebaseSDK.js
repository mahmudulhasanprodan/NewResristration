
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrQsVEYfVzQ7p4FjG8jZ1vp6jil8-_PRk",
  authDomain: "newresistration.firebaseapp.com",
  projectId: "newresistration",
  storageBucket: "newresistration.firebasestorage.app",
  messagingSenderId: "431724233476",
  appId: "1:431724233476:web:515533802fd82e10524651"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
const db = getDatabase(fireapp);
export default fireapp;
