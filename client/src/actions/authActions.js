import axios from "axios";
import { GET_ERRORS } from "./types.js";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:3000/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
