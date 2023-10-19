import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies:moviesReducer,
  },
});
export default AppStore;
