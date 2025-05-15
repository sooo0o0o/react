import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import counterReducer from "./slices/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
