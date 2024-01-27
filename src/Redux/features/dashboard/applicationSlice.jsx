// applicationsSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationsSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    addApplication: (state, action) => {
      state.applications.push(action.payload);
    },
  },
});

export const { addApplication } = applicationsSlice.actions;
export const selectApplications = (state) => state.applications.applications;
export default applicationsSlice.reducer;
