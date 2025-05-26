import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const User1List = () => {
  const navigate = useNavigate();

  //기본 state
  const [users, setUsers] = useState([]);

  //마운트(렌더링) 되기전에 데이터 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:8080/ch09/user1")
      .then((response) => {
        console.log("here...2 : ");
        setUsers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //수정하기
  const modifyHandler = (user) => {
    console.log(user);

    //수정 컴포넌트 전환
    navigate(`/user1/modify?uid=${user.uid}`); //API 주소
  };

  //삭제하기
  const deleteHandler = (user) => {
    axios
      .delete(`http://localhost:8080/ch09/user1/${user.uid}`) //컴포넌트 주소
      .then((response) => {
        console.log(response);

        //목록 갱신을 위한 state 업데이트 -> 배열 필터 함수 사용(filter)
        //uid를 비교해서 목록에 없는 내역은 list 에 출력하지않게하는것
        setUsers(
          users.filter((u) => {
            return u.uid !== user.uid;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.hp}</td>
              <td>{user.age}</td>
              {/* prettier-ignore */}
              <td>
                <button onClick={() => {modifyHandler(user)}}>:MODIFY</button>
                <button onClick={() => {deleteHandler(user)}}>:DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
