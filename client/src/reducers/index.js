import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorReducer from "./errorReducer.js";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
