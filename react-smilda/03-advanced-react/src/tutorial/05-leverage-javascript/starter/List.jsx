import { people } from "../../../data";

const List = () => {
  return (
    <div>
      {people.map((person) => {
        <div key={person.id}></div>;
      })}
    </div>
  );
};
export default List;
