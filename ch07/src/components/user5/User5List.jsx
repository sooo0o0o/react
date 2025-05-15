import React from "react";

export const User5List = () => {
  return (
    <div className="User5List">
      <h4>User5:LIST</h4>

      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>주소</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>신교수</td>
            <td>여</td>
            <td>25</td>
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
