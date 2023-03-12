import { useEffect, useState } from "react";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        console.log("chats:");
        console.log(data);

        setChats(data.Items);
      });
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("messages:");
        console.log(data);

        setMessages(data.Items);
      });
  }

  useEffect(() => {
    getChats();
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <div style={{ display: "flex" }}>
        <div>
          <h2>Chats</h2>
          {chats.map((chat) => (
            <div key={chat.id}>
              <button onClick={() => setChat(chat)}>{chat.name}</button>
            </div>
          ))}
        </div>
        <div>
          <h2>{currentChat && currentChat.name} Messages</h2>
          {messages.map((message) => (
            <div key={message.id}>
              {message.username}: {message.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
