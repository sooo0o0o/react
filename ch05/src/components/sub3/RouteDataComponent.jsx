import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { Result1Component } from "./Result1Component";
import { Result2Component } from "./Result2Component";
import { Result3Component } from "./Result3Component";

export const RouteDataComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const navigate = useNavigate();

  const button1Handler = () => {
    //쿼리 스트링 전송
    const queryString = `name=${formData.name}&email=${formData.email}&age=${formData.age}`;

    navigate(`/result1?${queryString}`);
  };

  const button2Handler = () => {
    //주소 파라미터 전송
    const params = `${formData.name}/${formData.email}/${formData.age}`;

    navigate(`/result2/${params}`);
  };

  const button3Handler = () => {
    //state 전송
    navigate(`result3`, { state: { formData } });
  };

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    {
      /* 
        객체의 정보를 업데이트 할 때 사용하는것! 
            - 전개 연산자를 이용해서 현재 상태값을 수정된 상태값으로 업데이트
            *외우기* 
      */
    }
  };

  return (
    <div className="RouteDataComponent">
      <h4>RouteDataComponent</h4>

      {/* prettier-ignore */}
      <form>
        <input type="text" name="name" value={formData.name} onChange={formChangeHandler} />
        <br />
        <input type="text" name="email" value={formData.email} onChange={formChangeHandler} />
        <br />
        <input type="number" name="age" value={formData.age} onChange={formChangeHandler} />
        <br />
        <input type="button" value="submitQueryString" onClick={button1Handler} />
        <br />
        <input type="button" value="submitAddrParam" onClick={button2Handler} />
        <br />
        <input type="button" value="submitState" onClick={button3Handler} />
        <br />
      </form>

      <Routes>
        <Route path="/result1" element={<Result1Component />}></Route>
        <Route
          path="/result2/:name/:email/:age"
          element={<Result2Component />}
        ></Route>
        <Route path="/result3" element={<Result3Component />}></Route>
      </Routes>
    </div>
  );
};
