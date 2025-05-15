import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { User1List } from "./User1List";
import { User1Regist } from "./User1Regist";
import { User1Modify } from "./User1Modify";

export const User1Component = () => {
  return (
    <div className="User1Component">
      <h4>User1</h4>
      <p>
        <Link to="/user1/list">:LIST</Link>
        <br />
        <Link to="/user1/regist">:REGIST</Link>
        <br />
      </p>

      <Routes>
        <Route path="/user1/list" element={<User1List />} />
        <Route path="/user1/regist" element={<User1Regist />} />
        <Route path="/user1/modify" element={<User1Modify />} />
      </Routes>
    </div>
  );
};
