import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

//using redux toolkit, we get a number of features, such as immutability check, thunk etc..
const store = configureStore({
  reducer: rootReducer,
});

export default store;
