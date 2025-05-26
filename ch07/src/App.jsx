import { useState } from "react";
import "./App.css";
import { User1Component } from "./components/user1/User1Component";
import { User2Component } from "./components/user2/User2Component";
import { User3Component } from "./components/user3/User3Component";
import { User4Component } from "./components/user4/User4Component";
import { User5Component } from "./components/user5/User5Component";

/*
  날짜 : 2025.05.15
  이름 : 곽혜수
  내용 : React HTTP 통신
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>ch07. React HTTP 통신</h3>
      <User1Component />
      <User2Component />
      <User3Component />
      <User4Component />
      <User5Component />
    </>
  );
}

export default App;
