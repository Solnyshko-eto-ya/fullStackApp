import { Checkbox, Form } from "antd";
import { useContext, useState } from "react";
import styled from "styled-components";

import { AppContext } from "../App";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import FormInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { CustomButtonStyle } from "../types";
import { $api } from "../api";
import CustomInput from "../components/CustomInput";

type Choise = "login" | "register";
type Auth = "success" | "failure";

function StartPage() {
  const {
    username,
    password,
    setIsAuthenticated,
    setUsername,
    setPassword,
    setUser,
  } = useContext(AppContext);

  const [choise, setChoise] = useState<Choise>("login");
  const [isSuccessfulLogin, setIsSuccessfulLogin] = useState<Auth | "">("");
  const [isSuccessfulRegister, setIsSuccessfulRegister] = useState<Auth | "">(
    ""
  );

  const clickRegisterButton = () => {
    setChoise("register");
  };

  const clickLoginButton = () => {
    setChoise("login");
  };

  async function registerUser() {
    try {
      const response = await $api.post("/user/register", {
        username: username,
        password: password,
      });
      console.log(response);
      setIsAuthenticated(response.data.isAuthenticated);
      setIsSuccessfulRegister("success");
    } catch (error) {
      setIsSuccessfulRegister("failure");
      console.log(error);
    }
  }

  async function loginUser() {
    try {
      const response = await $api.post("/user/login", {
        username: username,
        password: password,
      });

      setIsAuthenticated(response.data.isAuthenticated);
      setIsSuccessfulLogin("success");
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
      setIsSuccessfulLogin("failure");
    }
  }

  return (
    <StartPageContainer>
      <Wrapper>
        {choise === "login" ? (
          <Notification>
            {isSuccessfulLogin === "success"
              ? "Вход выполнен успешно"
              : isSuccessfulLogin === "failure"
              ? "Вход не выполнен"
              : "Выполните вход"}
          </Notification>
        ) : (
          <Notification>
            {isSuccessfulRegister === "success"
              ? "Регистрация выполнена успешно"
              : isSuccessfulRegister === "failure"
              ? "Регистрация не выполнена"
              : "Выполните регистрацию"}
          </Notification>
        )}
        <ButtonsContainer>
          <CustomButton
            onClick={clickLoginButton}
            buttonText="Login"
            styleType={CustomButtonStyle.BLUE}
          />

          <CustomButton
            buttonText="Register"
            onClick={clickRegisterButton}
            styleType={CustomButtonStyle.GREEN}
          />
        </ButtonsContainer>
        {choise === "login" ? (
          // login form
          <FormContainer>
            <CustomForm>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <CustomInput
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  value={username}
                  onChange={setUsername}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <CustomInput
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={setPassword}
                />
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="unchecked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <CustomButton
                buttonText="Login"
                onClick={loginUser}
                styleType={CustomButtonStyle.BLUE}
              />
            </CustomForm>
          </FormContainer>
        ) : (
          //register form
          <FormContainer>
            <CustomForm>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <FormInput
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  value={username}
                  onChange={setUsername}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <FormInput
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={setPassword}
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="unchecked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <CustomButton
                buttonText="Register"
                onClick={registerUser}
                styleType={CustomButtonStyle.GREEN}
              />
            </CustomForm>
          </FormContainer>
        )}
      </Wrapper>
    </StartPageContainer>
  );
}

interface StartPageContainerProps {
  children?: JSX.Element | JSX.Element[];
}

const StartPageContainer: React.FC<StartPageContainerProps> = ({
  children,
}) => {
  return <PageContainer>{children}</PageContainer>;
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  margin-top: 8%;
`;

const Notification = styled.p`
  color: #000000;
`;

const FormContainer = styled.div`
  height: auto;
  width: 400px;

  background-color: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(219, 219, 219, 0.74);
  border-radius: 15px;

  padding: 30px;
`;

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  height: auto;
  width: 400px;

  background-color: #ffffff;
  box-shadow: 0px 5px 20px 3px rgba(219, 219, 219, 0.74);
  border-radius: 15px;

  display: flex;
  gap: 15px;

  margin: auto;
  padding: 15px;
`;
export default StartPage;
