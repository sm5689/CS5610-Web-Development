import { FaCaretDown, FaChevronDown, FaFileExport, FaFileImport, FaFilter, FaRegKeyboard } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import React from "react";
import { FaGear } from "react-icons/fa6";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  const editableAssignments = ["A101", "A104", "A201", "A206", "A302", "A304", "A306", "A401", "A403", "A502", "A506", "A505", "A601", "A603", "A606", "A701", "A706", "A802", "A805"];

  return (
    <div className="flex-fill">
      <div>
        <div className="wd-flex-row-container p-2">
          <div>
            <button style={{ border: "none", backgroundColor: "white", color: "red" }}>
              Gradebook <FaCaretDown />
            </button>
          </div>

          <div className="flex-fill" style={{ textAlign: 'right' }}>
            <FaRegKeyboard style={{ marginRight: "100px" }} />
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
            <button style={{ marginBottom: "20px", marginTop: "5px" }} type="button" className="btn btn-light">
              <FaFilter /> Apply Filter
            </button>
          </div>
        </div>
      </div>
      {/* ... other UI components ... */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered" style={{ borderColor: "gray" }}>
          <thead>
            <tr>
              <th>Student Name</th>
              {as.map((assignment) => (
                <th key={assignment._id}>
                  {assignment.title} Out of 100
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((u) => u._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                  <td style={{ color: "red" }}>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (g) => g.student === enrollment.user && g.assignment === assignment._id
                    );
                    return (
                      <td style={{ textAlign: "center" }} key={assignment._id}>
                        {editableAssignments.includes(assignment._id) ? (
                          <input style={{ textAlign: "center", width: "60px", margin: "0 auto" }}
                            type="number"
                            className="form-control"
                            defaultValue={grade?.grade || ""}
                            min="0"
                            max="100"
                          />
                        ) : (
                          grade?.grade || ""
                        )}
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