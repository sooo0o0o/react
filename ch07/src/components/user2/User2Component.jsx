import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { User2List } from "./User2List";
import { User2Regist } from "./User2Regist";
import { User2Modify } from "./User2Modify";

export const User2Component = () => {
  return (
    <div className="User2Component">
      <h4>User2</h4>
      <p>
        <Link to="/user2/list">:LIST</Link>
        <br />
        <Link to="/user2/regist">:REGIST</Link>
        <br />
      </p>

      <Routes>
        <Route path="/user2/list" element={<User2List />} />
        <Route path="/user2/regist" element={<User2Regist />} />
        <Route path="/user2/modify" element={<User2Modify />} />
      </Routes>
    </div>
  );
};
