import React, { useEffect, ReactNode } from "react";
import { useState } from "react";

interface DataSourceProps {
  getData: () => Promise<any>;
  resourceName: string;
  children: ReactNode;
}

export const DataSource = ({ 
  getData = () => Promise.resolve({}), 
  resourceName, 
  children 
} : DataSourceProps) => {
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

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