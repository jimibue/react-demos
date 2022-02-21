import { Link, Outlet } from "react-router-dom";

function ReactNav() {
  return (
    <>
      <Outlet />

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          width: "100px",
          background: "#f9f9f9",
        }}
      >
        <p>React Sections:</p>
        <Link to="/react/state_demo">State Demo</Link>
        <Link to="/react/counter">Counter</Link>
        <Link to="/react/axios_get">Map</Link>
        <Link to="/react/user_input">User Input</Link>
      </nav>
    </>
  );
}

export default ReactNav;
