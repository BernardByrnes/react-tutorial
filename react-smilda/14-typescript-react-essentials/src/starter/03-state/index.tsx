import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  {
    id: 1,
    url: "crazy url🤣",
    text: "some text",
  },
  {
    id: 2,
    url: "crazy url🤣",
    text: "some text",
  },
  {
    id: 3,
    url: "crazy url🤣",
    text: "some text",
  },
];

function Component() {
  const [text, setText] = useState("take a break");
  const [numb, setNumb] = useState(7);
  const [list, setList] = useState<string[]>([]);
  const [lists, setLists] = useState<Link[]>([]);

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
