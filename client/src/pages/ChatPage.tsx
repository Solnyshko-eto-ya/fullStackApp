import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { styled } from "styled-components";

import ChatCard from "../components/ChatCard";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { CustomButtonStyle } from "../types";

const socket = io("http://localhost:8080");

const ChatPage = () => {
  // const [rooms, setRooms] = useState<Room[]>([]);
  // const [params, setParams] = useState({});
  // const { search } = useLocation();

  // useEffect(() => {
  //   const searchParams = Object.fromEntries(new URLSearchParams(search));
  //   setParams(searchParams);
  //   socket.emit("join", searchParams);
  // }, [search]);

  // console.log(params);

  return (
    <ChatContainer>
      <Header></Header>
      <Wrapper>
        <ListOfChats>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>

          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>

          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
          <ChatCard chatName="Chat"></ChatCard>
        </ListOfChats>
        <Chat>
          <ChatMessages>
            <UserMessagesContainer>
              <Message>message</Message>
            </UserMessagesContainer>
            <UserMessagesContainer>
              <Message>
                message message message message message message message
                messagemessagemessagemessagemessage vvmessage message
              </Message>
            </UserMessagesContainer>
            <MembersMessagesContainer>
              <Message>
                message message message message message message message
                messagemessagemessagemessagemessage vvmessage message
              </Message>
            </MembersMessagesContainer>
            <MembersMessagesContainer>
              <Message>
                message message message message message message message
                messagemessagemessagemessagemessage vvmessage message
              </Message>
            </MembersMessagesContainer>
            <MembersMessagesContainer>
              <Message>
                message message message message message message message
                messagemessagemessagemessagemessage vvmessage message
              </Message>
            </MembersMessagesContainer>
            <MembersMessagesContainer>
              <Message>
                message message message message message message message
                messagemessagemessagemessagemessage vvmessage message
              </Message>
            </MembersMessagesContainer>
            <MembersMessagesContainer>
              <Message>
                message message message message message message message
                messagemessagemessagemessagemessage vvmessage message
              </Message>
            </MembersMessagesContainer>
            <MembersMessagesContainer>
              <Message>
                message message message message message message message
                messagemessagemessagemessagemessage vvmessage message
              </Message>
            </MembersMessagesContainer>
            <MembersMessagesContainer>
              <Message>
                message message message message message message message
                messagemessagemessagemessagemessage vvmessage message
              </Message>
            </MembersMessagesContainer>
            <UserMessagesContainer>
              <Message>message</Message>
            </UserMessagesContainer>
            <UserMessagesContainer>
              <Message>message</Message>
            </UserMessagesContainer>
            <UserMessagesContainer>
              <Message>message</Message>
            </UserMessagesContainer>
          </ChatMessages>
          <InputMessageContainer>
            <InputWrapper>
              <CustomInput
                value={""}
                placeholder={""}
                onChange={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </InputWrapper>
            <InputButtonWrapper>
              <CustomButton
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                buttonText={"Send"}
                styleType={CustomButtonStyle.GREEN}
              />
            </InputButtonWrapper>
          </InputMessageContainer>
        </Chat>
      </Wrapper>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  height: 100vh;
  width: 100%;

  background-color: #ffffff;

  box-sizing: border-box;

  /* padding: 10px; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  height: 92%;
  width: 100%;

  background-color: #ffffff;
`;

const ListOfChats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  background-color: #ffffff;

  border-right: 1px solid;

  overflow-y: auto;

  padding: 10px;
`;

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  width: 100%;

  box-sizing: border-box;

  background-color: #ffffff;
`;

const InputMessageContainer = styled.div`
  padding: 10px;

  box-sizing: border-box;

  display: flex;
  gap: 10px;

  width: 100%;

  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);
`;

const InputWrapper = styled.div`
  flex-grow: 2.7;
  padding: 10px;
`;

const InputButtonWrapper = styled.div`
  flex-grow: 0.3;
  padding: 10px;
`;

const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  background-color: #ffffff;

  border-right: 1px solid;

  overflow-y: auto;

  padding: 10px;
`;

const UserMessagesContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  /* background-color: coral; */
  box-sizing: border-box;

  padding: 10px;
`;

const MembersMessagesContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;

  /* background-color: blue; */
  box-sizing: border-box;

  padding: 10px;
`;

const Message = styled.div`
  max-width: 50%;
  height: auto;

  background-color: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(219, 219, 219, 0.74);
  border-radius: 10px;

  padding: 10px;
`;

const Header = styled.div`
  height: 8%;
  width: 100%;

  background-color: #0070f3;
  box-shadow: 0px 8px 5px -5px rgba(34, 60, 80, 0.6);
  box-sizing: border-box;
  padding: 10px;
`;

export default ChatPage;
