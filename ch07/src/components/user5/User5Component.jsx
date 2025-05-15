import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { User5List } from "./User5List";
import { User5Regist } from "./User5Regist";
import { User5Modify } from "./User5Modify";

export const User5Component = () => {
  return (
    <div className="User5Component">
      <h4>User5</h4>
      <p>
        <Link to="/user5/list">:LIST</Link>
        <br />
        <Link to="/user5/regist">:REGIST</Link>
        <br />
      </p>

      <Routes>
        <Route path="/user5/list" element={<User5List />} />
        <Route path="/user5/regist" element={<User5Regist />} />
        <Route path="/user5/modify" element={<User5Modify />} />
      </Routes>
    </div>
  );
};
