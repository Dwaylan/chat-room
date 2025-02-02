import { Chatroom } from "./chat";
import ChatUI from "./ui";

console.log("bundle successful. Hello from app.js");

// DOM queries
const chatList = document.querySelector(".chat-list");
const chatUI = new ChatUI(chatList);
const updateMessage = document.querySelector(".update-mssg");

const newChatForm = document.querySelector(".new-chat");
newChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addNewMessage(message)
    .then(() => {
      newChatForm.reset();
    })
    .catch((err) => {
      console.log(err);
    });
});

// Update username
const nameUpdate = document.querySelector(".new-name");
nameUpdate.addEventListener("submit", (e) => {
  e.preventDefault();
  // update name via chatroom class
  const newName = nameUpdate.name.value.trim();
  chatroom.updateName(newName);
  // resetting form
  nameUpdate.reset();
  // Briefly show an update message
  updateMessage.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => {
    updateMessage.innerText = "";
  }, 3000);
});

const chatroom = new Chatroom("general", "Junie");

// Get chats and render
chatroom.getMessages((data) => {
  chatUI.render(data);
  console.log(data);
});
