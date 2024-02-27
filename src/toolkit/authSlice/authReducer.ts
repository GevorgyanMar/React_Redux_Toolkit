import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "./type";
import { loginUser, registerUser } from "./controller";

type AuthState = {
  loggedInUser: Auth | null;
  error: string | null;
  loading: boolean;
};

const initialState: AuthState = {
  loggedInUser: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.loggedInUser = null;
      state.error = null;
      localStorage.removeItem("authData");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload;
      const authDataString = JSON.stringify(action.payload);
      localStorage.setItem("authData", authDataString);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = "Something wrong";
    });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
