import { Link, Outlet } from "react-router-dom";


function Basics() {
  return (
    <>
    <Outlet />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display:'flex',
          flexDirection:'column',
          width:'100px',
          background:'#f9f9f9'
        }}
      >
          <p>Basic Sections:</p>
        <Link to="/basics/arrays">Arrays</Link> 
        <Link to="/basics/map">Map</Link> 
     
      </nav>
   
    </>
  );
}

export default Basics;
