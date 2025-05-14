import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const Result2Component = () => {
  //주소 쿼리 스트링 처리 훅 -> 전송 하는 순서대로!
  const { name, email, age } = useParams();

  return (
    <div className="Result2Component">
      <h4>Result1Component</h4>

      <p>
        name : {name}
        <br />
        email : {email}
        <br />
        age : {age}
        <br />
      </p>
    </div>
  );
};
