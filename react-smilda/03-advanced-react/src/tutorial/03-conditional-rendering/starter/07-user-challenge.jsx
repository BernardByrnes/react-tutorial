import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Bread Maker" });
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello There,{user.name}</h4>
          <button className="btn" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>kale</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
