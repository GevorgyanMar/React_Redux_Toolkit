import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "4472ccb06ed0af7715addce24d612cda";
type WeatherData = {
  name: string;
  wind: { speed: number };
  main: { temp: number; humidity: number };
};

export const fetchCurrentWeather = createAsyncThunk<
  WeatherData,
  { latitude: number; longitude: number; city: string },
  { rejectValue: string }
>(
  "user/fetchWeather",
  async ({ latitude, longitude, city }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${latitude}&lon=${longitude}&appid=4472ccb06ed0af7715addce24d612cda&units=metric`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch weather data.");
    }
  }
);
export const fetchForecastWeather = createAsyncThunk(
  "user/fetchForecastWeather",
  async (
    {
      latitude,
      longitude,
      city,
    }: { latitude: number; longitude: number; city: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lat=${latitude}&lon=${longitude}&appid=4472ccb06ed0af7715addce24d612cda&units=metric&cnt=5`
      );

      return response.data;
    } catch (e) {
      return rejectWithValue("");
    }
  }
);
