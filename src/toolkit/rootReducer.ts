import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./loginSlices/loginReducer";
import userReducer from "./userSlices/userReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
