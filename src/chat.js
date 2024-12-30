import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  where,
} from "@firebase/firestore";

console.log("bundle successful. Hello from chat.js");

// adding new chat documents

const db = getFirestore();
const colRef = collection(db, "chat");
class Chatroom {
  constructor(room, user_name) {
    this.room = room;
    this.user_name = user_name;
    this.chat = colRef;
  }
  async addNewMessage(message) {
    // Formatting chat object
    const now = new Date();
    const newMessage = {
      message: message,
      user_name: this.user_name,
      room: this.room,
      created_at: now,
    };
    // saving the chat document
    const response = await addDoc(this.chat, newMessage);
    return response;
  }
  getMessages(callback) {
    where("room", "==", "gaming");
    onSnapshot(this.chat, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          callback(change.doc._document.data.value.mapValue.fields);
        }
      });
    });
  }
}

const chatroom = new Chatroom("gaming", "Junie");
// console.log(chatroom);

chatroom.getMessages((data) => {
  console.log(data);
});

// setting up real-time listener to get new chats

// chatroom
//   .addNewMessage("hey all")
//   .then(() => {
//     console.log("new message added");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
