import Card from "../card/Card.component";
import "./Card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(({ id, name, email }) => (
        <Card key={id} name={name} email={email} id={id}></Card>
      ))}
    </div>
  );
};
export default CardList;
