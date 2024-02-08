import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./type";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e) {
      return rejectWithValue("");
    }
  }
);

export const addUser = createAsyncThunk(
  "user/addUser",
  async (userData: User, { dispatch }) => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/users", userData);

      dispatch(fetchUsers());
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await axios.put<User>(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        user
      );
      return response.data;
    } catch (e) {
      return rejectWithValue("");
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id: number, { rejectWithValue }) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue("");
    }
  }
);
