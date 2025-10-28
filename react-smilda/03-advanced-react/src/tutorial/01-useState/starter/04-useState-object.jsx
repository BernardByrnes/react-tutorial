import React, { useState } from "react";
import { people } from "../../../data";

const UseStateObject = () => {
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("Reading books");

  const displayPerson = () => {
    setName("John Wick");
    setAge(28);
    setHobby("Kicking Ass");
  };

  console.log(name, age, hobby);

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys : {hobby}</h3>
      <button type="button" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
