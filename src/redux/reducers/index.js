import { combineReducers } from "redux";
import modules from "./moduleReducer";

const rootReducer = combineReducers({
  modules,
});

export default rootReducer;
