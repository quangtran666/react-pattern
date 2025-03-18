import { useEffect, useState } from "react";
import axios from "axios";

export const useResource = <T,>(resourceUrl: string): T | null => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<T>(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
};