import { createSlice } from "@reduxjs/toolkit";
import { fetchForecastWeather } from "./controller";

type WeatherState = {
  forecast: {
    dt_txt: any;
    date: string;
    main: {
      temp: string;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  }[];
  error: string | null;
};

const initialState: WeatherState = {
  forecast: [],
  error: null,
};

const forecastWeatherSlice = createSlice({
  name: "forecastWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecastWeather.fulfilled, (state, action) => {
        state.forecast = action.payload.list;
        state.error = null;
      })
      .addCase(fetchForecastWeather.rejected, (state, action) => {
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const {} = forecastWeatherSlice.actions;

export default forecastWeatherSlice.reducer;
