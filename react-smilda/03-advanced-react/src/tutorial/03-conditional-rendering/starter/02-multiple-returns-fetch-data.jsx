import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const userData = await response.json();
        setUser(userData);
        setIsLoading(false);
        console.log(userData);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return <h2>Is loading</h2>;
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  // const { avatar_url, name, company, bio } = user;

  return (
    <section>
      <h2>Fetch Data</h2>;
      <img
        style={{ width: "150px", borderRadius: "50%" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>Works at {user.company}</h4>
      <p>{user.bio}</p>
    </section>
  );
};

export default MultipleReturnsFetchData;
