import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authentications/authSlice";
import applicationsReducer from "./dashboard/applicationSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  applications: applicationsReducer,
});

export default rootReducer;
