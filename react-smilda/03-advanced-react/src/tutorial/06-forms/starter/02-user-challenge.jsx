import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const newUser = {
      id: Date.now(),
      name: name,
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Clear the input
    setName("");

    console.log("form submitted");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
