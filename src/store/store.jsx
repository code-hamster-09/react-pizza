import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import homeSlice from "./slices/homeSlice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    filter: filterSlice,
  },
});

export default store;
window.store = store;
