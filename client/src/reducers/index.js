import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorReducer from "./errorReducer.js";
import profileReducer from "./profileReducer.js";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});
