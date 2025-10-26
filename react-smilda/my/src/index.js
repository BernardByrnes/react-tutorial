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
  const someValue = "shakeandbake"
  
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        // const { img, title, author, id } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

// do not use index as key unless the list will never change

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("handle Form Submisiion");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  );
};

const Book = ({ img, title, author, children }) => {
  // console.log(props);
  // const { img, title, author } = props;


  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={}>Display Title</button>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
