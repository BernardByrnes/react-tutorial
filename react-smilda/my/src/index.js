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
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          // const { img, title, author, id } = book;
          return (
            <Book
              {...book}
              key={book.id}
              getBook={getBook}
              number={index + 1}
            />
          );
        })}
      </section>
    </>
  );
}

// do not use index as key unless the list will never change

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
