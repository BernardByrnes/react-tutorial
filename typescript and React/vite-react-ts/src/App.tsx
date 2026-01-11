import "./App.css";
import Person from "./Person";

let name: string = "pedro";
let age: number = 45;
let evens: number[] = [1, 2, 3, 4, 5, 6];
console.log(name, age, evens);

function App() {
  console.log(name);
  return (
    <>
      <Person name={name} age={age} isMarried={false} />
    </>
  );
}

export default App;
