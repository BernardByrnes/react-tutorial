import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Title />
      <Image />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/91ZVf3kNrcL._SY466_.jpg" />
);
const Title = () => <h2>The Let Them Theory</h2>;
const Author = () => {
  return <h4>Mel Robbins</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
