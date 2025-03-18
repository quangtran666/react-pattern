import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  age: number;
  country: string;
  books: string[];
}

export const useCurrentUser = (): User | null => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<User>("/current-user");
      setUser(response.data);
    })();
  }, []);

  return user;
};