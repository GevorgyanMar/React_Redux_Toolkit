import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, fetchUsers, updateUser } from "./controller";
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
    setUsers(state, action) {
      state.users = action.payload;
    },
    updateUserSuccess(state, action) {
      const updatedUser = action.payload;
      state.users = state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
    },
    deleteUserSuccess(state, action) {
      const userIdToDelete = action.payload;
      state.users = state.users.filter((user) => user.id !== userIdToDelete);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    // builder.addCase(updateUser.fulfilled, (state, action) => {
    //   const updatedUser = action.payload;
    //   state.users = state.users.map((user) => {
    //     if (user.id === updatedUser.id) {
    //       return updatedUser;
    //     }
    //     return user;
    //   });
    // });
    // builder.addCase(deleteUser.fulfilled, (state, action) => {
    //   const userIdToDelete = action.payload;
    //   state.users = state.users.filter((user) => user.id !== userIdToDelete);
    // });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
