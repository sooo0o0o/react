import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const ContextUserComponent = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <div
      className="ContextUserComponent"
      style={{ backgroundColor: "#eeeeee", padding: "10px" }}
    >
      <h4>User List</h4>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.uid}, {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};
