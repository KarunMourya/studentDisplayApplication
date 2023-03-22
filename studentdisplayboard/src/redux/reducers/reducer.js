import { combineReducers } from "redux";
import userReducer from "./addUserReducer.js";
import loginReducer from "./loginUserReducer.js";
import {reducer} from "./dataFetchingReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  create:userReducer,
  user: reducer
});

export default rootReducer;