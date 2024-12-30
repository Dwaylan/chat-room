import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
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
    this.unsub;
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
    // creating a query conditional using the 'where' method to specify rooms
    this.unsub = this.chat;
    const roomQuery = query(
      this.chat,
      where("room", "==", this.room, orderBy("created_at"))
    );
    onSnapshot(roomQuery, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          callback(change.doc._document.data.value.mapValue.fields);
        }
      });
    });
  }
  updateName(user_name) {
    this.user_name = user_name;
  }
  updateChatRoom(room) {
    this.room = room;
    console.log("room updated");
    // if (this.unsub) {
    //   this.unsub();
    // }
  }
}

const chatroom = new Chatroom("general", "Junie");
// console.log(chatroom);

chatroom.getMessages((data) => {
  console.log(data);
});

// setting up real-time listener to get new chats

// chatroom.updateChatRoom("gaming");

setTimeout(() => {
  chatroom.updateChatRoom("gaming");
  chatroom.updateName("walnut");
  chatroom.getMessages((data) => {
    console.log(data);
  });
  chatroom.addNewMessage("hello");
}, 3000);
