import React, { useContext, useState } from "react";
import CounterContext from "../contexts/CounterContext";

export const ContextChildComponent = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext);

  return (
    <div className="ContextChildComponent">
      <h4>ContextChildComponent</h4>
      <p>
        ContextChild count : {count}
        <br />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {/* prettier-ignore */}
        <button onClick={() => {reset(0);}}>0</button>
      </p>
    </div>
  );
};
