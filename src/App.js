import { Link, Outlet } from "react-router-dom";
import "./App.css";
import AxiosGet, { AxiosGetCode } from "./demos/AxiosGet";
import Counter from "./demos/Counter";
import DemoContainer from "./demos/DemoContainer";

function App() {
  return (
    <div>
      <div
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent:'space-between'
        }}
      >
        <nav
          style={{
            paddingBottom: "1rem",
            background:'#f3f3fc',
            display: "flex",
            flexDirection: "column",
            width: "80px",
          }}
        >
          <p>Page Sections:</p>
          <Link to="/basics/map ">Basics</Link>
          <Link to="/react">React</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
