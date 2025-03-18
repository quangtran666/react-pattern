import { useEffect, useState } from "react";

export const useDataSource = <T,>(getData: () => Promise<T> | T): T | null => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return resource;
};