import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./loginSlices/loginReducer";
import userReducer from "./userSlices/userReducer";
import mediaReducer from "./mediaSlices/mediaReducer";
import weatherReducer from "./weatherSlices/weatherReducer";
import forecastReducer from "./weatherSlices/forecastReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  users: userReducer,
  media: mediaReducer,
  weather: weatherReducer,
  forecastWeather: forecastReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
