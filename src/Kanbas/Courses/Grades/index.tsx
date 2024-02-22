import { FaCaretDown, FaChevronDown, FaFileExport, FaFileImport, FaFilter, FaKeyboard, FaRegKeyboard } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div className="flex-fill">
      <div>
      <div className="wd-flex-row-container p-2">
        <div>
        <button style={{border:"none", backgroundColor:"white", color: "red"}}>
          Gradebook <FaCaretDown/>
        </button>
        </div>
        
        <div className="flex-fill" style={{ textAlign: 'right' }}>
          <FaRegKeyboard style={{marginRight:"100px"}}/>
          <button
            style={{ border: 'solid 0.5px', backgroundColor: 'lightgray' }}
            type="button"
            className="btn custom-btn-outline me-2"
          >
            <FaFileImport /> Import
          </button>

          <div className="dropdown" style={{ float: 'right' }}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: 'lightgray', color: 'black' }}
            >
              <FaFileExport /> Export
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Export</a></li>
              <li><a className="dropdown-item" href="#">Export all</a></li>
              <li><a className="dropdown-item" href="#">Export some</a></li>
            </ul>

            <button
              style={{
                backgroundColor: 'lightgray',
                border: 'solid 1px',
                float: 'right'
              }}
              type="button"
              className="btn custom-btn-outline me-2"
            >
              <FaGear />
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="student-names">Student Names</label>
        </div>
        <div className="col">
          <label htmlFor="assignment-names">Assignment Names</label>
        </div>
      </div>

      <div className="row">
        <div className="col input-group mb-3">
          <input placeholder="🔍 Search Students" type="text" className="form-control" aria-label="Text input with dropdown button" />
          <button style={{ color: 'white', borderLeft: 'none', borderColor: 'lightgray' }} className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaChevronDown style={{ color: 'gray' }} />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>

        <div className="col input-group mb-3">
          <input placeholder="🔍 Search Assignments" style={{ borderRightColor: 'white' }} type="text" className="form-control" aria-label="Text input with dropdown button" />
          <button style={{ color: 'white', borderLeftColor: 'white', borderColor: 'lightgray' }} className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaChevronDown style={{ color: 'gray' }} />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button style={{marginBottom:"20px", marginTop:"5px"}} type="button" className="btn btn-light">
            <FaFilter /> Apply Filter
          </button>
        </div>
      </div>
    </div>
      <div className="table-responsive flex-fill">
        <table className="table table-striped">
          <thead style={{border: "solid"}}>
            <th style={{border: "solid"}}>Student Name</th>
            {as.map((assignment) => (
              <th key={assignment._id} style={{border: "solid"}}>
                {assignment.title}
              </th>
            ))}
          </thead>
          <tbody style={{border: "solid"}}>
            {es.map((enrollment) => {
              const user = users.find((u) => u._id === enrollment.user);
              return (
                <tr key={enrollment._id} style={{border: "solid"}}>
                   <td style={{border: "solid"}}>
                     <span style={{color: "red"}}>{user?.firstName} {user?.lastName}</span>
                   </td>
                   {as.map((assignment) => {
                     const grade = grades.find(
                       (g) => g.student === enrollment.user && g.assignment === assignment._id
                     );
                     return (
                       <td key={assignment._id} style={{border: "solid"}}>
                         {grade?.grade || ""}
                       </td>
                     );
                   })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
