import React, { useEffect, useState } from "react";
import "./index.css";
// import db from "../../Database";
import {
    FaEllipsisV,
    FaCheckCircle,
    FaPlusCircle,
    FaRegCheckCircle,
    FaPlus,
    FaGripVertical,
    FaCaretRight,
    FaCaretDown,
} from "react-icons/fa";
import { useParams } from "react-router";
import { FaArrowRight, FaGrip } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
        console.log(moduleList);
    const selectedModule = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    // dispatch(setModule(moduleList.filter((module) => module.course === courseId)[0]));
    // const modulesList = db.modules.filter((module) => module.course === courseId);
    // const [selectedModule, setSelectedModule] = useState(modulesList[0])
    // useEffect(()=>{console.log("Initial Render");},[]);
    return (

        <>
            <div className="d-flex justify-content-end">
                <button
                    style={{ borderColor: "gray", backgroundColor: "lightgray" }}
                    type="button"
                    className="btn custom-btn-outline me-2"
                >
                    Collapse All
                </button>
                <button
                    style={{ borderColor: "gray", backgroundColor: "lightgray" }}
                    type="button"
                    className="btn custom-btn-outline me-2"
                >
                    View Progress
                </button>
                {/* <select style={{ border: "solid" }} className="btn custom-btn-outline me-2">
                    <option value="VAL1">
                     <FaCheckCircle className="text-success" />Publish All
                    </option>
                    <option value="VAL2">
                    Publish None
                    </option>
                </select> */}
                <div className="dropdown" style={{ float: "right" }}>
                    <button
                        style={{ backgroundColor: "lightgray", color: "black" }}
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <FaRegCheckCircle className="text-success" /> Publish All
                    </button>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                    ></ul>
                </div>
                <button
                    style={{ border: "solid", backgroundColor: "red", color: "white" }}
                    type="button"
                    className="btn custom-btn-module"
                >
                    <FaPlus className="ms-2" /> Module
                </button>
                <button
                    style={{
                        borderColor: "gray",
                        backgroundColor: "lightgray",
                        color: "black",
                    }}
                    type="button"
                    className="btn custom-btn-module"
                >
                    <FaEllipsisV className="ms-2" />
                </button>
            </div>
            <hr />
            <input className="input-textarea-style" style={{border: "solid"}}
                        value={selectedModule.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...selectedModule, name: e.target.value }))
                        }
                    />
                    <button style={{ float: "inline-end", border: "solid"}} type="button" className="btn-update" onClick={() => dispatch(updateModule(selectedModule))}>Update</button>

                    <button style={{ float: "inline-end", border: "solid" }} type="button" className="btn-add"
                        onClick={() => dispatch(addModule({ ...selectedModule, course: courseId }))}>
                        Add
                    </button>
                    <br />
                    <br />
                    <textarea className="input-textarea-style" style={{border: "solid"}}
                        value={selectedModule.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...selectedModule, description: e.target.value }))
                        }
                    />
            {/* <!-- Add buttons here --> */}
            <ul style={{ width: "99%" }} className="list-group wd-modules">
                <li className="list-group-item">


                    
                </li>

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item" onClick={() => { console.log(module);dispatch(setModule(module)); }}>
                            <button style={{ border: "solid" }} type="button" className="btn-edit"
                                onClick={(event) => { dispatch(setModule(module)); }}>
                                Edit
                            </button>

                            <button style={{  border: "solid" }} type="button" className="btn-delete" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>

                            <div>
                                <FaGripVertical className="me-2" />
                                <FaCaretRight />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaCaretDown />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                                        <li className="list-group-item">
                                            <FaGripVertical className="me-2" />
                                            <span style={{ paddingLeft: "20px" }}>{lesson.name}</span>
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;
