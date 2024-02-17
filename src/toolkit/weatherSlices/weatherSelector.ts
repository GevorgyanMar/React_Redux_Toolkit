import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const weatherSelector = (state: RootState) => state.weather;

export const weatherDataSelector = createSelector(
  weatherSelector,
  (weather) => weather.main
);
export const windSelector = createSelector(
  weatherSelector,
  (weather) => weather.wind
);

export const citySelector = createSelector(
  weatherSelector,
  (weather) => weather.city
);

export const errorSelector = createSelector(
  weatherSelector,
  (weather) => weather.error
);
