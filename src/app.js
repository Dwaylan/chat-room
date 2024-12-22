import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxXzoaGbLRsusIR1vtUqa5JVXQtiUX3SE",
  authDomain: "chat-room-7be1f.firebaseapp.com",
  projectId: "chat-room-7be1f",
  storageBucket: "chat-room-7be1f.firebasestorage.app",
  messagingSenderId: "12639144394",
  appId: "1:12639144394:web:b833a25f2f319c3c1d2733",
  measurementId: "G-MTNEWJHE7V",
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
