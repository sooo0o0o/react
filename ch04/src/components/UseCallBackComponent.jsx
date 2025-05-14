import React, { useCallback, useEffect, useState } from "react";

export const UseCallBackComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //핸들러
  const buttonHandler = useCallback(() => {
    setCount((preCount) => {
      return preCount + 1;
    });
  }, []); //[] 부분을 공백으로 두면 한 번만 실행(Id값 고정됨)

  buttonHandler.id = buttonHandler.id || crypto.randomUUID();

  console.log("현재 buttonHandler.id : ", buttonHandler.id);

  useEffect(() => {
    console.log("buttonHandler update...");
  }, [buttonHandler]);

  return (
    <div className="UseCallBackComponent">
      <h3>UseCallBackComponent</h3>
      <p>
        count : {count}
        <button onClick={buttonHandler}>+</button>
      </p>
    </div>
  );
};
