import React from "react";
import useCounter from "../hooks/useCounter";

export const UseCustomComponent = () => {
  {/* prettier-ignore */}
  const [state, increaseDispatch, decreaseDispatch, resetDispatch] =
    useCounter(0);

  return (
    <div className="UseCustomComponent">
      <h3>UseCustomComponent</h3>

      <button onClick={increaseDispatch}>+</button>
      <button onClick={decreaseDispatch}>-</button>
      <button onClick={resetDispatch}>0</button>
      <p>count : {state.count}</p>
    </div>
  );
};
