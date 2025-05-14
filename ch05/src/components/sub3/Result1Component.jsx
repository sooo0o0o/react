import React from "react";
import { useSearchParams } from "react-router-dom";

export const Result1Component = () => {
  //주소 쿼리 스트링 처리 훅
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const age = searchParams.get("age");

  return (
    <div className="Result1Component">
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
