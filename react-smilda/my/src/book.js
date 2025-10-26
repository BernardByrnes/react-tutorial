const Book = (props) => {
  const { img, title, author, id, getBook, number } = props;
  console.log(number);
  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Display Title</button>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">#{number}</span>
    </article>
  );
};

export default Book;
