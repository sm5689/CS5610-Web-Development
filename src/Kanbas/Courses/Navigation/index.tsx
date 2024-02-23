import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaRegEyeSlash } from 'react-icons/fa';
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", 'Zoom Meetings', 'Quizzes', 'People', 'Panopto Video', 'Discussions', 'Announcements', 'Pages', 'Files', 'Rubrics', 'Outcomes', 'Collaborations', 'Syllabus', 'Settings'];
  const { pathname } = useLocation();
  const linksWithIcons = [
    "Discussions", "Announcements", "Pages", "Files",
    "Rubrics", "Outcomes", "Collaborations", "Syllabus"
  ];

  const getIcon = (linkName: string) => {
    // Check if the current link name is in the list of links with icons
    if (linksWithIcons.includes(linkName)) {
      // Return the icon component if the link name matches
      return <FaRegEyeSlash  color="gray" />;
    }
    return null; // Return null if no icon should be displayed
  };
  return (
    <ul className="wd-navigation" style={{paddingTop: "10px", paddingRight:"30px"}}>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link} {getIcon(link)}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;