import React from "react";
import { Outlet } from "react-router-dom";

export const ParentComponent = () => {
  return (
    <div
      className="ParentComponent"
      style={{ backgroundColor: "#dfdfdf", padding: "10px" }}
    >
      <h4>ParentComponent</h4>

      {/* 자식 라우팅 컴포넌트 출력 */}
      <Outlet />
    </div>
  );
};
