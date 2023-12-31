import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./components/state"

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
