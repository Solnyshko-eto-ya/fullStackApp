import React, { useState } from "react";
import "./App.css";
import StartPage from "./pages/StartPage";
import { Context } from "./types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/InfoPage";
import ChatPage from "./pages/ChatPage";

export const AppContext = React.createContext<Context>({
  username: "",
  password: "",
  user: {},

  isAuthenticated: false,
  roomname: "",
  enterRoom: () => {},
  setUser: () => {},
  setRoomName: () => {},
  setIsAuthenticated: () => {},
  setUsername: () => {},
  setPassword: () => {},
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  // {
  //   path: "/main-page",
  //   element: <MainPage />,
  // },
  // {
  //   path: "/chat-page",
  //   element: <ChatPage />,
  // },
]);

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [roomname, setRoomName] = useState("");

  if (isAuthenticated === true) {
    setTimeout(() => {
      router.navigate("/main-page");
    }, 1000);
  }

  const enterRoom = () => {
    setTimeout(() => {
      router.navigate(`/chat-page?name=${username}&room=${roomname}`);
    }, 1000);
  };

  return (
    <AppContext.Provider
      value={{
        username,
        password,
        user,

        isAuthenticated,
        roomname,
        enterRoom,
        setUser,
        setRoomName,
        setIsAuthenticated,
        setUsername,
        setPassword,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
