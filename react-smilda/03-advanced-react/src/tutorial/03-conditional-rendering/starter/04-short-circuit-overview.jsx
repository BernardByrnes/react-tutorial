import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");

  return (
    <div>
      <h4>Falsy Or: {text || "hello world"}</h4>;
      <h4>Falsy Or: {text && "hello world"}</h4>;
      <h4>Truthy Or: {name || "hello world"}</h4>;
      <h4>Truthy Or: {name && "hello world"}</h4>;
    </div>
  );
};
export default ShortCircuitOverview;
