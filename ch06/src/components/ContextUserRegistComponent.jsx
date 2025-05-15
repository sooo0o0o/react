import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

export const ContextUserRegistComponent = () => {
  //전역 state
  const { users, setUsers } = useContext(UserContext);

  //지역 state
  const [user, setUser] = useState({ uid: "", name: "", age: 0 });

  //Handler
  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); //전개연산자 사용
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setUsers([...users, user]); //배열은 []?
  };

  return (
    <div className="ContextUserRegistComponent">
      <h4>User Regist</h4>

      {/* prettier-ignore */}
      <form onSubmit={submitHandler}>
        <input type="text" name="uid" value={user.uid} onChange={changeHandler} />
        <br />
        <input type="text" name="name" value={user.name} onChange={changeHandler} />
        <br />
        <input type="number" name="age" value={user.age} onChange={changeHandler} />
        <br />
        <input type="submit" value={"저장"} />
        <br />
      </form>
    </div>
  );
};
