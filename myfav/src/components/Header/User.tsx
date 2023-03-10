import { AppContext } from "contexts/AppContextProvider";
import React, { useContext } from "react";

const User = () => {
  const { user, setUser } = useContext(AppContext);

  return (
    <div>
      {user == null && (
        <button
          type="button"
          onClick={() => setUser && setUser({ username: "Marcos" })}
        >
          Login
        </button>
      )}
      {user && (
        <div>
          {user.username}
          <button type="button" onClick={() => setUser && setUser(null)}>
            unLogin
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
