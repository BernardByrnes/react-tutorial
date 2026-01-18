import { useState } from "react";

const navLinks = [
  {
    id: 1,
    url: "crazy url🤣",
  },
];

function Component() {
  const [text, setText] = useState("take a break");
  const [numb, setNumb] = useState(7);
  const [list, setList] = useState<string[]>([]);
  return (
    <div>
      <h2 className="mb-1">React and TS</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("cow");
          setNumb(3);
          setList(["cat"]);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
export default Component;
