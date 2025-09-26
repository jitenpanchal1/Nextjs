import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeslice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;