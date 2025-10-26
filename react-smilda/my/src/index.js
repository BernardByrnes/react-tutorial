import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Mel Robbins",
    title: "The Let Them Theory",
    img: "./images/image-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/81kg51XRc1L._AC_UF1000,1000_QL80_.jpg",
    id: 2,
  },
  {
    author: " John Grisham",
    title: "The Widow",
    img: "https://i.ebayimg.com/images/g/vnEAAeSwVsdo6Wsm/s-l1600.jpg",
    id: 3,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // console.log(props);
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
