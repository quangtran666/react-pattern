import axios from "axios";
import React, { useEffect, ReactNode } from "react";
import { useState } from "react";

interface ResourceLoaderProps {
  resouceUrl: string;
  resourceName: string;
  children: ReactNode;
}

export const ResouceLoader = ({ 
  resouceUrl, 
  resourceName, 
  children 
} : ResourceLoaderProps) => {
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resouceUrl);
      setResource(response.data);
    })();
  }, [resouceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};