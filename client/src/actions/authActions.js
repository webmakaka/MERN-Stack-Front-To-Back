import { TEST_DISPATCH } from "./types.js";

export const registerUser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
