import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
 //fetching chats
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => { //data.chatId == combined id 
      doc.exists() && setMessages(doc.data().messages); //fetching messages from chats
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)

  return (
    <div className="messages">
      {messages.map((m) => ( //for each message return message component
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
