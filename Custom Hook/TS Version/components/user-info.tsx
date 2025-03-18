import { useCallback } from "react";
import { useDataSource } from "./data-source.hook";
import axios from "axios";

interface User {
  name: string;
  age: number;
  country: string;
  books: string[];
}

interface UserInfoProps {
  userId: string;
}

const fetchFromServer = (url: string) => async (): Promise<any> => {
  const response = await axios.get(url);
  return response.data;
};

const getFromLocalStorage = (key: string) => (): string | null => {
  return localStorage.getItem(key);
};

export const UserInfo: React.FC<UserInfoProps> = ({ userId }) => {
  const fetchUser = useCallback(fetchFromServer(`/users/${userId}`), [userId]);
  const user = useDataSource<User>(fetchUser);
  const message = useDataSource<string | null>(getFromLocalStorage("msg"));
  const { name, age, country, books } = user || {};
  
  console.log("Am I rendering?");
  
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};