import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/useInterval";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem, TextField, Typography, Button } from "@mui/material";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newChatName, setNewChatName] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [userName, setUserName] = useState("");

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

  function createNewChat() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
      },
      body: JSON.stringify({
        name: newChatName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setChats([...chats, data.Item]);
      });
    setNewChatName("");
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

  function postMessage() {
    if (currentChat != null) {
      const message = {
        chatId: currentChat.id, // required, must be an existing chat id
        username: userName, // required
        text: inputMessage, // required
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(message),
      });

      setInputMessage("");
    } else {
      console.log("cannot post a message because currentChat is null");
    }
  }

  function onMessageInput(event) {
    console.log(event);
    setInputMessage(event.target.value);
  }
  function onUserNameInput(event) {
    console.log(event);
    setUserName(event.target.value);
  }

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    1000,
    currentChat && currentChat.id
  );

  return (
    <div>
      <br></br>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          color: "Highlight",

          textAlign: "center",
        }}
      >
        Chat
      </Typography>
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex" }}>
          <Container maxWidth="sm">
            <Box sx={{ minWidth: 120 }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="chat-select-label">Chat</InputLabel>
                <Select
                  labelId="chat-select-label"
                  id="chat-select"
                  label="Chat"
                >
                  {chats.map((chat) => (
                    <MenuItem key={chat.id} value={chat.id}>
                      <Button color="secondary" onClick={() => setChat(chat)}>
                        {chat.name}
                      </Button>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                variant="filled"
                color="secondary"
                label="Add New Chat"
                placeholder="enter chat name"
                onChange={(event) => setNewChatName(event.target.value)}
                value={newChatName}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    createNewChat();
                  }
                }}
                sx={{ margin: "1rem" }}
              />
              <br></br>
              <TextField
                id="standard-basic"
                label="User Name"
                defaultValue="User Name"
                variant="standard"
                onInput={onUserNameInput}
                value={userName}
                color="secondary"
              />

              <div>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    color: "Highlight",
                    textAlign: "center",
                  }}
                >
                  {currentChat && currentChat.name} Messages
                </Typography>

                <div>
                  {messages.map((message) => (
                    <div key={message.id}>
                      {message.username}: {message.text}
                    </div>
                  ))}
                </div>
                <br></br>
              </div>
            </Box>
            <div>
              <TextField
                variant="filled"
                color="secondary"
                label="Post Message"
                placeholder="New Message"
                onInput={onMessageInput}
                value={inputMessage}
              />{" "}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => postMessage()}
              >
                Post Message
              </Button>
            </div>
          </Container>
        </div>
      </Box>
    </div>
  );
};
