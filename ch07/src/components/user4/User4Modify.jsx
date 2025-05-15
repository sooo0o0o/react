import React from "react";

export const User4Modify = () => {
  return (
    <div className="User4Modify">
      <h4>User4:MODIFY</h4>
      <form onSubmit={null}>
        <table border={1}>
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>성별</th>
              <th>나이</th>
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
                <input type="text" name="gender" value={null} onChange={null} />
              </td>
              <td>
                <input type="number" name="age" value={null} onChange={null} />
              </td>
              <td>
                <input type="text" name="hp" value={null} onChange={null} />
              </td>
              <td>
                <input type="text" name="addr" value={null} onChange={null} />
              </td>
              <td colSpan={2} align="right">
                <input type="submit" value={"MODIFY"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
