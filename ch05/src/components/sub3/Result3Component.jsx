import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export const Result3Component = () => {
  // state 전송 데이터
  const location = useLocation();

  const data = location.state.formData;

  return (
    <div className="Result3Component">
      <h4>Result3Component</h4>

      <p>
        name : {data.name}
        <br />
        email : {data.email}
        <br />
        age : {data.age}
        <br />
      </p>
    </div>
  );
};
