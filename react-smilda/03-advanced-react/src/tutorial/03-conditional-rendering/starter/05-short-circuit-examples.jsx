import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "Ok its me again"}</h2>
      {text && (
        <div>
          <h2>Its Me</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComp name={user.name} />}
      <h2 style={{ marginBlock: "1rem" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>
    </div>
  );
};

const SomeComp = ({ name }) => {
  return (
    <div>
      <h2>AM the conditional Guy Man</h2>
      <h2>My name is {name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
