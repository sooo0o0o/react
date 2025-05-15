import React, { useContext, useState } from "react";
import { ContextChildComponent } from "./ContextChildComponent";
import CounterContext from "../contexts/CounterContext";

export const ContextParentComponent = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext);
  return (
    <div
      className="ContextParentComponent"
      style={{ backgroundColor: "#dfdfdf", padding: "10px" }}
    >
      <h4>ContextParentComponent</h4>
      <p>
        ContextParent count : {count}
        <br />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {/* prettier-ignore */}
        <button onClick={()=>{reset(0);}}>0</button>
      </p>

      <ContextChildComponent />
    </div>
  );
};
