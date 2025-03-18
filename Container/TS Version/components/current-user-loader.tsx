import axios from "axios";
import React, { useEffect, ReactNode } from "react";
import { useState } from "react";

interface User {
  [key: string]: any;
}

interface CurrentUserLoaderProps {
  children: ReactNode;
}

export const CurrentUserLoader = ({ children } : CurrentUserLoaderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

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