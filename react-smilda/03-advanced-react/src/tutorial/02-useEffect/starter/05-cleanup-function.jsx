import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToogle] = useState(false);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setToogle(!toggle);
        }}
      >
        toggle component
      </button>
      {toggle && <Randcomp />}
    </div>
  );
};

const Randcomp = () => {
  return <h1>Heyy daya</h1>;
};

export default CleanupFunction;
