import { User } from "./UseContextProvider";

const Person = ({ name, age, isMarried }: User) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isMarried ? "is Married" : "is Single"}</p>
    </div>
  );
};
export default Person;
