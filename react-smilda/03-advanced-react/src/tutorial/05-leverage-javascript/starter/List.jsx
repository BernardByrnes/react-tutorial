import { People } from "./People";
import { people } from "../../../data";

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <People key={person.name} {...person} />;
      })}
    </div>
  );
};
export default List;
