import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const User1Regist = () => {
  const navigate = useNavigate();

  //폼 전송 데이터 state
  const [user, setUser] = useState({
    uid: "",
    name: "",
    hp: "",
    age: 0,
  });

  //핸들러
  const submitHandler = (e) => {
    e.preventDefault();

    //서버 전송 => "user" 가 실시간으로 업데이트 되는데 그걸 바로 post 주소로 보내는 것
    axios
      .post("http://localhost:8080/ch09/user1", user)
      .then((response) => {
        console.log(response.data);

        //목록 컴포넌트로 이동
        navigate("/user1/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="User1Regist">
      <h4>User1:REGIST</h4>
      <form onSubmit={submitHandler}>
        <table border={1}>
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>휴대폰</th>
              <th>나이</th>
            </tr>
          </thead>
          <tbody>
            {/* prettier-ignore */}
            <tr>
              <td>
                <input type="text" name="uid" value={user.uid} onChange={changeHandler} />
              </td>
              <td>
                <input type="text" name="name" value={user.name} onChange={changeHandler} />
              </td>
              <td>
                <input type="text" name="hp" value={user.hp} onChange={changeHandler} />
              </td>
              <td>
                <input type="number" name="age" value={user.age} onChange={changeHandler} />
              </td>
              <td colSpan={2} align="right">
                <input type="submit" value={"REGIST"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
