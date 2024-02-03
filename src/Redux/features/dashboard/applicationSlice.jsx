// applicationsSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
  toggle: "columns",
};

const applicationsSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    addApplication: (state, action) => {
      state.applications.push(action.payload);
    },
    setToggle: (state, action) => {
      console.log("action", action);
      state.toggle = action.payload;
    },
  },
});

export const { addApplication, setToggle } = applicationsSlice.actions;
export const selectApplications = (state) => state.applications.applications;
export default applicationsSlice.reducer;
