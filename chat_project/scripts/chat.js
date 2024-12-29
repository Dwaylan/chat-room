// adding new chat documents
class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chat = db.collection("chat");
  }
}

const chatroom = new Chatroom("gaming", "Junie");
console.log(chatroom);
// setting up real-time listener to get new chats
// updating the username
// updating the room
