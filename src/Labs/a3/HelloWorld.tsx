import {Link} from "react-router-dom";
import Nav from "../../Nav";

function HeLLoWorLd() {
 return(
  <div>
   <Link to="/Labs/a3">A3</Link> |
   <Link to="/Kanbas">Kanbas</Link> |
   <Link to="/hello">Hello</Link> |
   <Nav/>
   <h1>Hello World!</h1>
  </div>
 );
}

export default HeLLoWorLd;