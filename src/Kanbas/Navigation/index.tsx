import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaCreativeCommonsSa} from "react-icons/fa";
import { Fa6, FaDisplay, FaQuestion } from "react-icons/fa6";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaRegClock className="fs-2" /> },
    { label: "Studio",  icon: <FaDisplay className="fs-2" /> },
    { label: "Commons",  icon: <FaCreativeCommonsSa className="fs-2" /> },
    { label: "Help",  icon: <FaQuestion className="fs-2" /> },

  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
       <li>
       <Link to={`https://www.northeastern.edu`}><img width="95%" height="6.5%" src="/images/logo.png" /></Link></li>
       {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`} style={{ color: (!pathname.includes(link.label) && link.label === "Account") ? "white" : "" }}>
            {link.icon} {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;