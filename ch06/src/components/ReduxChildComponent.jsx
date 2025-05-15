import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slices/CounterSlice";

export const ReduxChildComponent = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="ReduxChildComponent">
      <h4>ReduxChildComponent</h4>
      <p>
        ReduxChild count : {count}
        <br />
        {/* prettier-ignore */}
        <>
        <button onClick={() => { dispatch(increment());}}>+</button>
        <button onClick={() => { dispatch(decrement());}}>-</button>
        <button onClick={() => { dispatch(reset(0));}}>0</button>
        </>
      </p>
    </div>
  );
};
