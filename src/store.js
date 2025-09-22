import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Features/ThemeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
