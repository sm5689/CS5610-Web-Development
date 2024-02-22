import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './index.css';
function Kanbas() {
    return (
      <div className="d-flex">
        <div className="d-none d-md-block position-fixed bottom-0">
        <KanbasNavigation/>
        </div>
        <div style={{ flexGrow: 1 }} className="wd-ml-md-5">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
        </div>
      </div>
  );}
  export default Kanbas;



// import {Link} from "react-router-dom";
// import Nav from "../Nav";

// function Kanbas() {
//  return(
//   <div>
//    <Link to="/Labs/a3">A3</Link> |
//    <Link to="/Kanbas">Kanbas</Link> |
//    <Link to="/hello">Hello</Link> |
//    <Nav/>
//    <h1>Kanbas</h1>
//   </div>
//  );
// }

// export default Kanbas;