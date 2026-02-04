import { useState, useEffect } from "react";
import CardList from "./components/card-list/Card-list.component";
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
      <CardList monsters={monsters}></CardList>
    </>
  );
}

export default App;
