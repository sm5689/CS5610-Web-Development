import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  modules: db.modules,
  module: { _id: "", name: "New Module 22", description: "New Description" },
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
        const newModules = state.modules.map((module) => {
            if (module._id === action.payload._id) {
              return action.payload;
            } else {
              return module;
            }
          });
      state.modules = newModules;
    },
    setModule: (state, action) => {
        console.log("Reducer Called" + action.payload.name);
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;