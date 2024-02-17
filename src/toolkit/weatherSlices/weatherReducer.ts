import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentWeather } from "./controller";

type WeatherState = {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  city: string;
  error: null;
};

const initialState: WeatherState = {
  main: {
    temp: 0,
    humidity: 0,
  },
  wind: {
    speed: 0,
  },
  city: "",
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.main = action.payload.main;
        state.wind = action.payload.wind;
        state.city = action.payload.name;
        state.error = null;
      })
      .addCase(fetchCurrentWeather.rejected, (state: any, action: any) => {
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
