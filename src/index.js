import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
console.log("bundle successful. Hello from index.js");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxXzoaGbLRsusIR1vtUqa5JVXQtiUX3SE",
  authDomain: "chat-room-7be1f.firebaseapp.com",
  projectId: "chat-room-7be1f",
  storageBucket: "chat-room-7be1f.firebasestorage.app",
  messagingSenderId: "12639144394",
  appId: "1:12639144394:web:74190b466b6034a51d2733",
  measurementId: "G-G387D6DY6T",
};

// Initializing the app
initializeApp(firebaseConfig);

// Initializing the service
export const db = getFirestore();

// Collection reference
const colRef = collection(db, "chat");

// Get collection data
getDocs(colRef)
  .then((snapshot) => {
    let messages = [];
    snapshot.docs.forEach((text) => {
      messages.push({ ...text.data(), id: text.id });
    });
    console.log(messages);
  })
  .catch((err) => {
    console.log(err);
  });
