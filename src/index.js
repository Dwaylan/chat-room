import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
const db = getFirestore();
const auth = getAuth();

// Collection reference
const colRef = collection(db, "chat");

// Get collection data
getDocs(colRef)
  .then((snapshot) => {
    let messages = [];
    snapshot.docs.forEach((text) => {
      messages.push({ ...text.data(), id: text.id });
    });
    // console.log(messages);
  })
  .catch((err) => {
    console.log(err);
  });

// Signing user(s) up
const signUpForm = document.querySelector(".signup");
signUpForm.addEventListener("submit", (e) => {
  const email = signUpForm.email.value;
  const password = signUpForm.password.value;
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created", cred.user);
      signUpForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
