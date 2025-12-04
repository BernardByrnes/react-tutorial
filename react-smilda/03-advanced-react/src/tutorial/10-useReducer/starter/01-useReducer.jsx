import React from "react";
import { useState, useReducer } from "react";
import { data, people } from "../../../data";

const defaultState = {
  people: data,
};

const reducer = () => {};

const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    // setPeople([]);
  };

  const resetList = () => {
    // setPeople(data);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => setPeople([])}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;

function ClickTrackers() {
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current++;
    console.log("Clicked:", clickCount.current);
  };

  return <button onClick={handleClick}>Click me (UI never changes)</button>;
}
