import axios from "axios";
import { USER_DATA } from "../types";
import { SERVER_ACCOUNT } from "../../config/Server";

export const userData = (data) => {
  return {
    action: USER_DATA,
    payload: data,
  };
};

export const setData = () => async (dispatch) => {
  try {
    const responese = await axios.get(SERVER_ACCOUNT, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    dispatch(userData(responese));
  } catch (msg) {
    console.log(msg);
  }
};
