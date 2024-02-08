import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const loginSelector = (state: RootState) => state.login;
export const nameSelector = createSelector(
  loginSelector,
  (login) => login.name
);

export const isLoginSelector = createSelector(
  loginSelector,
  (login) => login.isLogin
);
