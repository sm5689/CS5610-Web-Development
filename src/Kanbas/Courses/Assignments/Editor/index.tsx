import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaEllipsisV } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div style={{ width: "1275px" }} className="flex-fill p-2 m-2">
            <div className="wd-flex-row-container p-2">
                <div className="flex-fill" style={{ textAlign: 'right' }}>
                    <button style={{ color: 'green', border: 'none', backgroundColor: 'transparent' }} type="button" className="btn custom-btn-outline me-2">
                        {/* <FontAwesomeIcon icon={faCircleCheck} style={{ paddingRight: '5px', color: 'green' }} /> */}<FaCircleCheck /> Published
                    </button>
                    <div className="dropdown" style={{ float: 'right' }}>
                        <button
                            style={{ backgroundColor: 'lightgray', color: 'lightgray' }}
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FaEllipsisV className="ms-2" style={{ color: 'black' }} />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Edit</a></li>
                            <li><a className="dropdown-item" href="#">Delete</a></li>
                            <li><a className="dropdown-item" href="#">Hide</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <br />

            <div style={{ marginLeft: '10px' }}>
                <h4>Assignment Name</h4>
                <input value={assignment?.title}
                    className="form-control mb-2" />
                <br />
                <textarea className="form-control" cols={50} rows={5} defaultValue="This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netify."></textarea>
                <br />

                <div className="row g-0 text-end" style={{ paddingBottom: '15px' }}>
                    <div className="col-6 col-md-4" style={{ paddingTop: '5px', paddingRight: '15px' }}>Points</div>
                    <div className="col-sm-6 col-md-8 w-50">
                        <input className="form-control" type="text" placeholder="100" aria-label="default input example" defaultValue="100" />
                    </div>
                </div>

                <div className="row g-0 text-end" style={{ paddingBottom: '15px' }}>
                    <div className="col-6 col-md-4" style={{ paddingTop: '5px', paddingRight: '15px' }}>Assignment Group</div>
                    <div className="col-sm-6 col-md-8 w-50">
                        <select className="form-control">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row g-0 text-end" style={{ paddingBottom: '15px' }}>
                    <div className="col-6 col-md-4" style={{ paddingTop: '5px', paddingRight: '15px' }}>Display Grade as</div>
                    <div className="col-sm-6 col-md-8 w-50">
                        <select className="form-control">
                            <option>Percentage</option>
                            <option>Decimal</option>
                            <option>Percentile</option>
                        </select>
                    </div>
                </div>

                <div className="row g-0 text-end" style={{ paddingBottom: '15px' }}>
                    <div className="col-6 col-md-4" style={{ paddingTop: '5px', paddingRight: '15px' }}>
                        <input type="checkbox" />
                    </div>
                    <div className="col-sm-6 col-md-8" style={{ textAlign: 'start' }}>
                        Do not count this assignment towards the final grade
                    </div>
                </div>

                <div className="row g-0 text-end" style={{ paddingBottom: '15px' }}>
                    <div className="col-6 col-md-4" style={{ paddingTop: '5px', paddingRight: '15px' }}>Submission Type</div>
                    <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: 'start' }}>
                        <div className="wd-group" style={{ border: '0.5px solid #ded9d9', borderRadius: '1%', padding: '10px' }}>
                            <select className="form-control">
                                <option>Online</option>
                                <option>In-Person</option>
                            </select>
                            <br />
                            <b>Online Entry Options</b>
                            <br />
                            <input type="checkbox" checked id="textEntry" />
                            <label htmlFor="textEntry">Text Entry</label> <br />
                            <input type="checkbox" checked /> Website URL <br />
                            <label><input type="checkbox" checked /> Media recordings </label><br />
                            <input type="checkbox" /> Student Annotation <br />
                            <input type="checkbox" checked /> File Uploads <br />
                            <input type="checkbox" /> Restrict Upload File Types <br />
                        </div>
                    </div>
                </div>

                <div className="row g-0 text-end">
                    <div className="col-6 col-md-4" style={{ paddingTop: '5px', paddingRight: '15px' }}>Assign</div>
                    <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: 'start' }}>
                        <div className="wd-group" style={{ border: '0.5px solid #ded9d9', borderRadius: '1%', padding: '10px' }}>
                            <b>Assign to</b>
                            <input className="form-control" type="text" placeholder="Choose" defaultValue="Everyone" aria-label="default input example" />
                            <br />
                            <b>Due</b>
                            <input className="form-control" type="date" />
                            <br />
                            <div className="wd-flex-row-container" style={{ width: '100%', justifyContent: 'space-around' }}>
                                <div>
                                    <b>Available from</b><br />
                                    <input className="form-control" type="date" />
                                </div>
                                <div>
                                    <b>Until</b><br />
                                    <input className="form-control" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-0 text-end" style={{ paddingBottom: '15px' }}>
                    <div className="col-6 col-md-4" style={{ paddingTop: '5px', paddingRight: '15px' }}></div>
                    <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: 'start' }}>
                        <button className="btn" style={{ borderColor: 'lightgray', backgroundColor: 'lightgray', paddingBottom: '20px', width: '100%', height: '2rem' }}>
                            <i className="fa fa-plus" aria-hidden="true"></i> Add
                        </button>
                    </div>
                </div>
            </div>

            <hr style={{ marginLeft: '10px' }} />

            <div style={{ marginLeft: '10px' }}>
                <div className="wd-flex-row-container wd-flex-grow-1" style={{ float: 'right' }}>

                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-danger float-end">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                        Save
                    </button>


                </div>
            </div>

            <div className="wd-flex-row-container" style={{ paddingTop: '5px' }}>
                <div style={{ marginLeft: '20px', paddingTop: '5px' }}>
                    <input type="checkbox" />
                </div>
                <div style={{ marginLeft: '5px' }}>
                    Notify users that this content has changed
                </div>
            </div>

            <br />
            <hr style={{ marginLeft: '10px' }} />
        </div>



        // <div>
        //   <h2>Assignment Name</h2>
        //   <input value={assignment?.title}
        //          className="form-control mb-2" />
        //   <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        //     Save
        //   </button>
        //   <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        //         className="btn btn-danger float-end">
        //     Cancel
        //   </Link>
        // </div>
    );
}
export default AssignmentEditor;