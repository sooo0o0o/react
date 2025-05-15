import React from "react";

export const User5Regist = () => {
  return (
    <div className="User5Regist">
      <h4>User5:REGIST</h4>
      <form onSubmit={null}>
        <table border={1}>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>성별</th>
              <th>나이</th>
              <th>주소</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" name="seq" value={null} onChange={null} />
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
