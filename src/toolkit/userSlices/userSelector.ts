import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const usersSelector = (state: RootState) => state.users;

export const userDataSelector = createSelector(
  usersSelector,
  (users) => users.users
);
