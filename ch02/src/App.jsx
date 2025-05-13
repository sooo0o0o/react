import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Fragment } from "react";
import styled from "styled-components";

//Style-Component 정의
const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #333333;
  background-color: skyblue;
`;

//App 컴포넌트
function App() {
  let num1 = 1;
  let num2 = 2;

  const title = "Hello React!";
  const name = null;
  const isValue = false;

  const resultContent = function () {
    if (isValue) {
      return <p>true 입니다.</p>;
    } else {
      return <p>false 입니다.</p>;
    }
  };

  const cities = ["서울", "대전", "대구", "부산", "광주"];
  const users = [
    { uid: "a101", name: "김씨", age: 23, addr: "김해" },
    { uid: "a102", name: "이씨", age: 21, addr: "경주" },
    { uid: "a103", name: "박씨", age: 32, addr: "서울" },
    { uid: "a104", name: "장씨", age: 25, addr: "부산" },
    { uid: "a105", name: "소씨", age: 27, addr: "김해" },
  ];

  // JSX 이벤트
  const clickHandler = function () {
    alert("버튼2 클릭!");
  };

  let count = 0;
  const increase = function () {
    const resultCount = document.getElementsByClassName("count")[0];
    resultCount.innerText = ++count;
  };

  const decrease = function () {
    const resultCount = document.getElementsByClassName("count")[0];
    resultCount.innerText = --count;
  };

  const selectHandler = (e) => {
    console.log(`name : ${e.target.name}, value : ${e.target.value}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const jsondate = {
      uid: e.target.uid.value,
      name: e.target.name.value,
      age: e.target.age.value,
    };

    console.log(jsondate);
  };

  return (
    <div className="App">
      <h3>2. React JSX 실습</h3>

      <h4>변수 출력</h4>
      <p>num1 : {num1}</p>
      <p>num2 : {num2}</p>
      <p>title : {title}</p>
      <p>name : {name}</p>

      <h4>조건부 연산자</h4>
      <p>
        {num1 > num2 ? (
          <span>num1은 num2보다 크다.</span>
        ) : (
          <span>num1은 num2보다 작다</span>
        )}
      </p>
      <p>{name == null && <span>name은 null 입니다.</span>}</p>
      <p>{name || <span>name은 null 입니다.</span>}</p>
      {isValue ? <p>true 입니다.</p> : <p>false 입니다.</p>}
      {resultContent()}

      <h4>반복 연산자</h4>
      <ul>
        {cities.map((city, index) => (
          <li className="city" key={index}>
            {city}
          </li>
        ))}
      </ul>
      {users.map((user) => (
        <p className="user" key={user.uid}>
          {user.uid}, {user.name}, {user.age}, {user.addr}
        </p>
      ))}

      <h4>JSX Fragment</h4>
      {/*JSW 태그 요소를 감싸는 가상 태그, 렌더링 X, 간단하게 <></> 사용*/}
      <Fragment>
        <p>안녕하세요.</p>
        <p>반갑습니다.</p>
      </Fragment>

      <h4>JSX 이벤트</h4>
      <button
        onClick={() => {
          alert("버튼1 클릭!");
        }}
      >
        버튼1
      </button>
      <button onClick={clickHandler}>버튼2</button>

      <p>
        count : <span className="count">0</span>
        <br />
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </p>

      <select onChange={selectHandler} name="city">
        <option value="서울">서울</option>
        <option value="대전">대전</option>
        <option value="대구">대구</option>
        <option value="부산">부산</option>
        <option value="광주">광주</option>
      </select>

      <form onSubmit={submitHandler}>
        <input type="text" name="uid" /> <br />
        <input type="text" name="name" /> <br />
        <input type="number" name="age" /> <br />
        <input type="submit" name="submit" value="전송" />
      </form>

      <h4>JSX 스타일</h4>

      {/* 인라인 */}
      <div
        style={{
          display: "inline-block",
          width: "100px",
          height: "100px",
          border: "1px solid #333333",
          background: "orange",
        }}
      >
        in-line
      </div>

      {/* scss 스타일 */}
      <div className="box">scss</div>

      {/* style-component */}
      <StyledDiv>component</StyledDiv>

      {/* tailwind */}
      <div className="w-[100px] h-[100px] bg-[orange] border border-black">
        tailwind
      </div>
    </div>
  );
}

export default App;
