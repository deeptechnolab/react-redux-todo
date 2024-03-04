import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/todoslice";

const store = configureStore({
  reducer: reducer,
});

export default store;
