import axios from "axios";
import React, { useEffect, ReactNode } from "react";
import { useState } from "react";

interface User {
  [key: string]: any;
}

interface UserLoaderProps {
  userId: string | number;
  children: ReactNode;
}

export const UserLoader = ({ userId, children } : UserLoaderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};