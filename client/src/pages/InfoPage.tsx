import React, { useContext } from "react";
import { styled } from "styled-components";

import CustomButton from "../components/CustomButton";

import { WechatOutlined } from "@ant-design/icons";
import { CustomButtonStyle } from "../types";

import CustomInput from "../components/CustomInput";
import { AppContext } from "../App";
import { $api } from "../api";
import { Link } from "react-router-dom";

export default function MainPage() {
  const { roomname, setRoomName, user, enterRoom } = useContext(AppContext);
  const { userId, username } = user;
  return (
    <MainPageContainer>
      <ControlPanel>
        <UserCard>
          <UserCardText>
            <p>Your ID: {userId}</p>
            <p>Your username: {username}</p>
          </UserCardText>
        </UserCard>
        <CustomInput
          prefix={<WechatOutlined />}
          value={roomname}
          onChange={setRoomName}
          placeholder="Roomname"
        />

        <CustomButton
          buttonText="Войти в комнату"
          onClick={enterRoom}
          styleType={CustomButtonStyle.BLUE}
        />
      </ControlPanel>
    </MainPageContainer>
  );
}

interface MainPageContainerProps {
  children?: JSX.Element | JSX.Element[];
}

const MainPageContainer: React.FC<MainPageContainerProps> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

const PageContainer = styled.div`
  display: flex;
  gap: 50px;

  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  padding: 100px;
  align-items: center;
`;

const ControlPanel = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;

  background-color: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(219, 219, 219, 0.74);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 20px;
`;

const UserCard = styled.div`
  height: auto;
  width: 100%;

  background-color: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(219, 219, 219, 0.74);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
`;

const UserCardText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
