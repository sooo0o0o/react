import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const User1List = () => {
  //기본 state
  const [users, setUsers] = useState([]);

  //마운트(렌더링) 되기전에 데이터 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:8080/ch09/user1")
      .then((response) => {
        console.log("here...2 : " + response);
        setUsers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="User1List">
      <h4>User1:LIST</h4>

      <table border={1}>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>휴대폰</th>
            <th>나이</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>A101</td>
              <td>신교수</td>
              <td>010-0000-0000</td>
              <td>30</td>
              <td>
                <button onClick={null}>:MODIFY</button>
                <button onClick={null}>:DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
