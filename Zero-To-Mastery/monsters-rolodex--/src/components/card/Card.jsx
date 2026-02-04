import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="card-container">
      <img src={`http://robohash.org/${id}?set=set2`} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
