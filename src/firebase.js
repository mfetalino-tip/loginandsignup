import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVNFR-J9wimf2nHxFQjiJcUO9ifW4fHhk",
  authDomain: "swiftlaundry-9518b.firebaseapp.com",
  projectId: "swiftlaundry-9518b",
  storageBucket: "swiftlaundry-9518b.appspot.com",
  messagingSenderId: "417825013646",
  appId: "1:417825013646:web:a418a614b791c1b80a2edf"
};

export const app = initializeApp(firebaseConfig); // Export app for use in LoginModal.js
export const firestore = getFirestore(app);
export const auth = getAuth(app);