import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Auth } from "./type";

const url = "http://localhost:3001/auth";

export const fetchUsers = createAsyncThunk(
  "auth/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Auth[]>(url);
      return response.data;
    } catch (e) {
      return rejectWithValue("");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: Auth, { rejectWithValue }) => {
    try {
      const usersResponse = await axios.get<Auth[]>(url);
      const users = usersResponse.data;
      const userExists = users.some(
        (user) => user.username === userData.username
      );
      if (userExists) {
        throw new Error("User already exists");
      }

      const response = await axios.post(url, userData);
      return response.data;
    } catch (e) {
      return rejectWithValue("");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData: Auth, { rejectWithValue, dispatch }) => {
    try {
      const usersResponse = await dispatch(fetchUsers());
      const users: Auth[] = usersResponse.payload;

      const user: Auth | undefined = users.find(
        (user: Auth) =>
          user.username === userData.username &&
          user.password === userData.password
      );
      if (!user) {
        throw new Error("Invalid username or password");
      }

      return user;
    } catch (e) {
      return rejectWithValue("");
    }
  }
);
