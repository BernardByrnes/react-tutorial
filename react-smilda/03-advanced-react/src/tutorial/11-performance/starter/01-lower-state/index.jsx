import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import Counter from "./Counter";

const LowerState = () => {
  const [people, setPeople] = useState(data);

  // ✅ FIX: remove function that updates state
  const removePerson = (id) => {
    setPeople((oldPeople) => {
      return oldPeople.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <Counter />

      {/* ✔️ pass both people and removePerson */}
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

export default LowerState;
