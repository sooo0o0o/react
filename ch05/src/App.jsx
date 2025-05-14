import "./App.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { RouterBasicComponent } from "./components/sub1/RouterBasicComponent";
import { RouterOutletComponent } from "./components/sub2/RouterOutletComponent";
import { RouteDataComponent } from "./components/sub3/RouteDataComponent";
import root from "./routers/root";

function App() {
  return (
    <>
      <h3>ch05. React Router</h3>

      <h4>Router 기본</h4>
      <BrowserRouter>
        <RouterBasicComponent />
      </BrowserRouter>

      <h4>Router Outlet</h4>
      <BrowserRouter>
        <RouterOutletComponent />
      </BrowserRouter>

      <h4>Router 데이터 전송</h4>
      <BrowserRouter>
        <RouteDataComponent />
      </BrowserRouter>

      <h4>사용자 정의 Router</h4>
      <h5>
        현재 root 주소가 없으므로 링크로 직접 /sub4/hello 이런식으로 가야됨!
      </h5>
      <RouterProvider router={root}></RouterProvider>
    </>
  );
}

export default App;
