import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectLoggedInUser = (state: RootState) => state.auth.loggedInUser;

export const selectIsLoggedIn = createSelector(
  selectLoggedInUser,
  (loggedInUser) => loggedInUser !== null
);

export const selectLoading = (state: RootState) => state.auth.loading;

export const selectError = (state: RootState) => state.auth.error;

export const authSelectors = {
  selectLoggedInUser,
  selectIsLoggedIn,
  selectLoading,
  selectError,
};
