import { createSlice } from "@reduxjs/toolkit";
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
    addUser(state, action) {
      state.users = action.payload;
    },

    deleteUser(state, action) {
      const userIdToDelete = action.payload;
      state.users = state.users.filter((user) => user.id !== userIdToDelete);
    },

    updateUser(state, action) {
      const updatedUser = action.payload;
      state.users = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });
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
