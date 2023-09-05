import React from "react";
import { styled } from "styled-components";

interface ChatCardProps {
  chatName: string;
}

const ChatCard: React.FC<ChatCardProps> = ({ chatName }) => {
  return <Chat>{chatName}</Chat>;
};

const Chat = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: auto;

  background-color: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(219, 219, 219, 0.74);
  border-radius: 15px;

  padding: 10px;
  box-sizing: border-box;
`;

export default ChatCard;
