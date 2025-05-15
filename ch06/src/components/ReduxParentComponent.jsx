import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxChildComponent } from "./ReduxChildComponent";
import { decrement, increment, reset } from "../slices/CounterSlice";

export const ReduxParentComponent = () => {
  const count = useSelector((state) => state.counter.count); //counter 는 sotre 파일에 설정한 reducer 이름
  const dispatch = useDispatch();

  return (
    <div
      className="ReduxParentComponent"
      style={{ backgroundColor: "#efefef", padding: "10px" }}
    >
      <h4>ReduxParentComponent</h4>
      <p>
        ReduxParent count : {count}
        <br />
        {/* prettier-ignore */}
        <>
        <button onClick={() => { dispatch(increment());}}>+</button>
        <button onClick={() => { dispatch(decrement());}}>-</button>
        <button onClick={() => { dispatch(reset(0));}}>0</button>
        </>
      </p>

      <ReduxChildComponent />
    </div>
  );
};
