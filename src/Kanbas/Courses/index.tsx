import { assignments, courses } from "../../Kanbas/Database";
import { HiMiniBars3 } from "react-icons/hi2";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import path from "path";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { FaGlasses } from "react-icons/fa";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const courseNav = ['Home', 'Modules', 'Piazza', 'Assignments', 'Grades', 'Zoom Meetings', 'Quizzes', 'People', 'Panopto Video', 'Discussions', 'Announcements', 'Pages', 'Files', 'Rubrics', 'Outcomes', 'Collaborations', 'Syllabus', 'Settings'];
  const page = window.location.href;
  const listurl = page.split("/");
  console.log(listurl.length);
  let breadcrumb = listurl[listurl.length - 1];
  const lastSECOND = listurl[listurl.length - 2];
  if(lastSECOND == "Assignments"){
    const assignmentName = assignments.find((assignment) => assignment._id=== listurl[listurl.length-1]);
    breadcrumb = lastSECOND + "  >  " + assignmentName?.title;
  }
  return (
    <div>
      <div className="row">
        <div className="col" style={{ paddingLeft: "30px" }}>
          <h1 style={{ color: "red", fontSize: "20px", paddingTop: "20px" }} ><HiMiniBars3 /> Course {course?.name} <span style={{ color: "black" }}>&gt; {breadcrumb}</span></h1>
        </div>
        <div className="col" style={{paddingTop: "10px"}}>
          <span style={{ textAlign: "right", float: "inline-end" }}>
            <button
              style={{ backgroundColor: "lightgray", color: "black", borderColor: "gray" }}
              type="button"
              className="btn btn-outline-secondary"
            >
              <FaGlasses/> Student View
            </button>
          </span>

        </div>
        <hr style={{marginTop:"10px"}}/>
      </div>

      <div className="wd-flex-row-container">
        <div className="d-none d-md-block">
        <CourseNavigation />
        </div>
        <div className="flex-fill">
          {/* add position-fixed in the below div classname, also add this paddingTop: "30px" in the syle below*/}
          <div
            className=" bottom-0 end-0"
            style={{ left: "320px", top: "50px" }} >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Home" element={<h1>Home</h1>} />
              <Route path="Modules" element={<h1>Modules</h1>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
              <Route path="Grades" element={<Grades />} />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />


            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;