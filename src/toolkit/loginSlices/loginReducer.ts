import { createSlice } from "@reduxjs/toolkit";
import { loginState } from "./type";

const initialState: loginState = {
  email: "Mariam@gmail.com",
  password: "123456",
  name: "Mariam",
  isLogin: false,
};

const loginSlices = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { email, password } = action.payload;

      if (email === state.email && password === state.password) {
        state.isLogin = true;
      }
    },
  },
});

export const { loginUser } = loginSlices.actions;
export default loginSlices.reducer;
