import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { User4List } from "./User4List";
import { User4Regist } from "./User4Regist";
import { User4Modify } from "./User4Modify";

export const User4Component = () => {
  return (
    <div className="User4Component">
      <h4>User4</h4>
      <p>
        <Link to="/user4/list">:LIST</Link>
        <br />
        <Link to="/user4/regist">:REGIST</Link>
        <br />
      </p>

      <Routes>
        <Route path="/user4/list" element={<User4List />} />
        <Route path="/user4/regist" element={<User4Regist />} />
        <Route path="/user4/modify" element={<User4Modify />} />
      </Routes>
    </div>
  );
};
