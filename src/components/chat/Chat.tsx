import React, { FC, useEffect, useState } from "react";
import { useMessaging } from "../../hooks/useMessaging";
import { signalingProvider } from "../../providers/SocketProvider";
import MessageForm from "./MessageForm";
import Button from "../button/Button";
import MessagesList from "./MessagesList";
import "./style.scss";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../toolkit/authSlice/authSelector";
import { v4 as uuidv4 } from "uuid";

const Chat: FC = () => {
  const AuthInfo = useSelector(selectLoggedInUser);

  const [inputValue, setInputValue] = useState<string>("");

  const [messages, sendMessage] = useMessaging();

  useEffect(() => {
    signalingProvider.init();
  }, []);

  const onSend = () => {
    if (AuthInfo) {
      sendMessage({
        username: AuthInfo.username,
        content: inputValue,
        date: new Date().toISOString(),
        id: uuidv4(),
      });
    } else {
      console.error("AuthInfo is null");
    }
    setInputValue("");
  };

  return (
    <div className="chat-form">
      <MessagesList messages={messages} />
      <MessageForm value={inputValue} setValue={setInputValue} />
      <Button onClick={onSend} label="Send" />
    </div>
  );
};

export default Chat;
