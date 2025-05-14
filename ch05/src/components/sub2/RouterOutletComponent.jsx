import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ParentComponent } from "./ParentComponent";
import { Child2Component } from "./Child2Component";
import { Child1Component } from "./Child1Component";

export const RouterOutletComponent = () => {
  return (
    <div className="RouterOutletComponent">
      <h4>RouterOutletComponent</h4>
      <h5>중첩 라우팅</h5>
      <p>
        <Link to={"/parent"}>parent</Link>
        <br />
        <Link to={"/parent/child1"}>child1</Link>
        <br />
        <Link to={"/parent/child2"}>child2</Link>
        <br />
      </p>

      <Routes>
        <Route path="/parent" element={<ParentComponent />}>
          <Route path="/parent/child1" element={<Child1Component />}></Route>
          <Route path="/parent/child2" element={<Child2Component />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
