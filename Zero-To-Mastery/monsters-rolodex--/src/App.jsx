import { useState, useEffect } from "react";
import Card from "./components/card/Card";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    console.log("running side effect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  return (
    <>
      {monsters.map(({ id, name, email }) => (
        <Card key={id} name={name} email={email} id={id}></Card>
      ))}
    </>
  );
}

export default App;
