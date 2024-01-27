import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./features/rootReducer";

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
