import axios from "axios";
import { BookInfo } from "./components/book-info";
import { DataSource } from "./components/data-source";
import { UserInfo } from "./components/user-info";
import React from "react";

const fetchData = async (url: string): Promise<any> => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key: string) => (): string | null => {
  return localStorage.getItem(key);
};

interface MessageProps {
  msg?: string;
}

const Message = ({ msg } : MessageProps) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSource getData={() => fetchData("/users/1")} resourceName={"user"}>
        <UserInfo />
      </DataSource>

      <DataSource getData={() => getDataFromLocalStorage("test")} resourceName={"msg"}>
        <Message />
      </DataSource>
    </>
  );
}

export default App;