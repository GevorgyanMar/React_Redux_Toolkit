import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./controller";
import { User } from "./type";

type userState = {
  users: User[];
};

const initialState: userState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const { id, name, email, phone } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { id, name, email, phone };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
