import { useEffect, useState } from "react";

const useFetchPerson = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const userData = await resp.json();
        setUser(userData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [url]); // ✅ include URL in dependency array

  return { isLoading, isError, user };
};

export default useFetchPerson;
