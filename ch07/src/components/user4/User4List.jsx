import React from "react";

export const User4List = () => {
  return (
    <div className="User4List">
      <h4>User4:LIST</h4>

      <table border={1}>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>휴대폰</th>
            <th>주소</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A101</td>
            <td>신교수</td>
            <td>여</td>
            <td>25</td>
            <td>010-0000-0000</td>
            <td>부산</td>
            <td>
              <button onClick={null}>:MODIFY</button>
              <button onClick={null}>:DELETE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
