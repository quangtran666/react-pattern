import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  age: number;
  country: string;
  books: string[];
}

export const useUser = (userId: string): User | null => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<User>(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return user;
};