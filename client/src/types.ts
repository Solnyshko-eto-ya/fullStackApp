export interface Context {
  username: string;
  password: string;
  user: object;

  isAuthenticated: boolean;
  roomname: string;

  enterRoom: () => void;
  setUser: React.Dispatch<React.SetStateAction<object>>;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;

  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Message {
  messages: {
    author: string;
    message: string;
  };
}

export interface Room {
  id: number;
  roomname: string;
  admin: string;
  participants: [];
  messages: Message;
}

interface Tokens {
  tokens: {
    refreshToken: string;
    accesToken: string;
  };
}

export interface User {
  id: number;
  username: string;
  password: string;
  tokens: Tokens;
}

export enum CustomButtonStyle {
  GREEN,
  BLUE,
}
