import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    
    assignment: {_id: "", title: "New Assignment 22", subtitle: "New Assignment Description", dueDate: "Sep 18 2024", points: "100" }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
          state.assignments = [
            { ...action.payload, _id: new Date().getTime().toString() },
              ...state.assignments,
          ];
          console.log("test");
          console.log(state.assignments);
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
                state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                  return action.payload;
                } else {
                  return assignment;
                }
              });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
          },
      
    },
});

export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment} = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;