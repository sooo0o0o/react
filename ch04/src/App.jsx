import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UseRefComponent } from "./components/useRefComponent";
import { UseStateComponent } from "./components/UseStateComponent";
import { UseReducerComponent } from "./components/UseReducerComponent";

/*
  날짜 : 2025.05.13
  이름 : 곽혜수
  내용 : ch04.리액트 훅
*/

function App() {
  return (
    <>
      <h3>4장 리액트 훅</h3>

      {/* useRef hook */}
      <UseRefComponent />
      <UseRefComponent />

      {/* useState hook */}
      <UseStateComponent />

      {/* useReducer hook */}
      <UseReducerComponent />

      {/* useEffect hook */}
      {/* useMemo hook */}
      {/* useCallback hook */}
      {/* useCustom hook */}
    </>
  );
}

export default App;
