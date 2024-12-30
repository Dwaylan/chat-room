import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  // addDoc,
  // deleteDoc,
  // doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxXzoaGbLRsusIR1vtUqa5JVXQtiUX3SE",
  authDomain: "chat-room-7be1f.firebaseapp.com",
  projectId: "chat-room-7be1f",
  storageBucket: "chat-room-7be1f.firebasestorage.app",
  messagingSenderId: "12639144394",
  appId: "1:12639144394:web:74190b466b6034a51d2733",
  measurementId: "G-G387D6DY6T",
};

// Initializing app
initializeApp(firebaseConfig);

// Initializing services and database

const db = getFirestore();

// Collection reference
const colRef = collection(db, "chat");

// real time collection data
onSnapshot(colRef, (snapshot) => {
  let conversations = [];
  snapshot.docs.forEach((chat) => {
    conversations.push({ ...chat.data(), id: chat.id });
  });
  console.log(conversations);
});
