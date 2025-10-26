import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books.js";
import Book from "./book.js";

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author, id } = book;
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
}

// do not use index as key unless the list will never change

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
