import React, { FC } from "react";
import { Message } from "../../types/types";
import { dateFormat } from "../../utilities/utilities";

type MessagesListProps = {
  messages: Message[];
};

const MessagesList: FC<MessagesListProps> = ({ messages }) => {
  const sortedData = messages.sort((a: Message, b: Message) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <>
      {sortedData.map((message: Message) => (
        <div key={message.id} className="messages-list-item">
          <span> {message.username}</span>
          <span style={{ color: "#293097" }}> {message.content}</span>
          <span> {dateFormat(message.date)}</span>
        </div>
      ))}
    </>
  );
};

export default MessagesList;
