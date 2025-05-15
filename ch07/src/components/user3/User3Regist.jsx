import React from "react";

export const User3Regist = () => {
  return (
    <div className="User3Regist">
      <h4>User3:REGIST</h4>
      <form onSubmit={null}>
        <table border={1}>
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>생년월일</th>
              <th>휴대폰</th>
              <th>주소</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" name="uid" value={null} onChange={null} />
              </td>
              <td>
                <input type="text" name="name" value={null} onChange={null} />
              </td>
              <td>
                <input type="date" name="birth" value={null} onChange={null} />
              </td>
              <td>
                <input type="text" name="hp" value={null} onChange={null} />
              </td>
              <td>
                <input type="text" name="addr" value={null} onChange={null} />
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
