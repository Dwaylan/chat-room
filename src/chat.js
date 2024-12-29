import { Firestore } from "@firebase/firestore";

console.log("bundle successful. Hello from chat.js");
// adding new chat documents
class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chat = db.collection("chat");
  }
  async addNewMessage(message) {
    // Formatting chat object
    const now = new Date();
    const newMessage = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: Firestore.Timestamp(now),
    };
    const response = await this.chat.add(newMessage);
  }
}

// const chatroom = new Chatroom("gaming", "Junie");
// console.log(chatroom);
// setting up real-time listener to get new chats
// updating the username
// updating the room
