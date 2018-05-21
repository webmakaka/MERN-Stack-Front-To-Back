import { combineReducers } from "redux";
import authReducer from "./authReducer.js";

export default combineReducers({
  auth: authReducer
});
