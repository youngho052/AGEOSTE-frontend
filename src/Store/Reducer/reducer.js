import { USER_DATA } from "../types";

const INITAL_STATE = {};

function dataReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default dataReducer;
