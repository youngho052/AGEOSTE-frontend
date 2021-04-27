import { combineReducers } from "redux";
import dataReducer from "./Reducer/reducer";

const rootReducer = combineReducers({ dataReducer });

export default rootReducer;
