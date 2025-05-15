import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { User3List } from "./User3List";
import { User3Regist } from "./User3Regist";
import { User3Modify } from "./User3Modify";

export const User3Component = () => {
  return (
    <div className="User3Component">
      <h4>User3</h4>
      <p>
        <Link to="/user3/list">:LIST</Link>
        <br />
        <Link to="/user3/regist">:REGIST</Link>
        <br />
      </p>

      <Routes>
        <Route path="/user3/list" element={<User3List />} />
        <Route path="/user3/regist" element={<User3Regist />} />
        <Route path="/user3/modify" element={<User3Modify />} />
      </Routes>
    </div>
  );
};
