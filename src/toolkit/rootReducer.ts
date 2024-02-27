import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userSlices/userReducer";
import mediaReducer from "./mediaSlices/mediaReducer";
import weatherReducer from "./weatherSlices/weatherReducer";
import forecastReducer from "./weatherSlices/forecastReducer";
import authReducer from "./authSlice/authReducer";

const rootReducer = combineReducers({
  users: userReducer,
  media: mediaReducer,
  weather: weatherReducer,
  forecastWeather: forecastReducer,

  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
