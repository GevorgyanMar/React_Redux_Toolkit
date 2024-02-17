import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const forecastWeatherSelector = (state: RootState) =>
  state.forecastWeather;

export const forecastWeatherListSelector = createSelector(
  forecastWeatherSelector,
  (weather) => weather.forecast
);

export const errorWeatherSelector = createSelector(
  forecastWeatherSelector,
  (weather) => weather.error
);
