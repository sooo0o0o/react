import React, { useReducer } from "react";

//상태 선언
const initCountState = { count: 0 };

//리듀서 정의 - 상태 변경 함수
//=> 기능 확장을 위해서 사용! 기존의 count 는 +,- 기능만 있지만, reducer 를 사용하면 추가기능 정의 가능!
function countReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
  }
}

//상태 선언
const initUserState = { name: "", age: 0 };

//리듀서
function userReducer(state, action) {
  return { ...state, [action.name]: action.value };
}

export const UseReducerComponent = () => {
  //reducer 생성
  const [countState, countDispatch] = useReducer(countReducer, initCountState);
  const [userState, userDispatch] = useReducer(userReducer, initUserState);

  //전개 연산자
  const user = { name: "홍길동", age: 21 };
  const updateUser = {
    ...user,
    age: 31,
  };

  console.log(updateUser);

  return (
    <div className="UseReducerComponent">
      <h4>UseReducerComponent</h4>

      <p>count : {countState.count}</p>

      {/* prettier-ignore */}
      <>
      <button onClick={() => {countDispatch({type: 'INCREASE'})}}>+</button>
      <button onClick={() => {countDispatch({type: 'DECREASE'})}}>-</button>
      <button onClick={() => {countDispatch({type: 'RESET'})}}>re:</button>
      </>

      <p>
        name : {userState.name}
        <br />
        age : {userState.age}
        <br />
      </p>

      {/* prettier-ignore */}
      <>
      <input type="text" name="name" value={userState.name} onChange={(e) => {userDispatch(e.target)}} />
      <input type="text" name="age" value={userState.age} onChange={(e) => {userDispatch(e.target)}} />
      </>
    </div>
  );
};
