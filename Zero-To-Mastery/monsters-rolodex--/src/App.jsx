import { useState, useEffect } from "react";
import CardList from "./components/card-list/Card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    console.log("running side effect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data), filteredMonsters(data));
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString),
    );
    setFilteredMonsters(newFilteredMonsters);
  };

  return (
    <>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={monsters} />
    </>
  );
}

export default App;
