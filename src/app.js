import { Chatroom } from "./chat";
import ChatUI from "./ui";

console.log("bundle successful. Hello from app.js");

// DOM queries
const chatList = document.querySelector(".chat-list");
const chatUI = new ChatUI(chatList);

const chatroom = new Chatroom("general", "Junie");

// Get chats and render
chatroom.getMessages((data) => {
  chatUI.render(data);
  console.log(data);
});
