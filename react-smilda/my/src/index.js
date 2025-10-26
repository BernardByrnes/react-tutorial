import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const author = "Mel Robbins";
const title = "The Let Them Theory";
const img = "./images/image-1.jpg";

const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "./images/book-1.jpg",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};
const thirdBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "./images/book-1.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
