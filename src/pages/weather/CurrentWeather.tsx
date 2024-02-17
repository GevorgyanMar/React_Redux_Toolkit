import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  citySelector,
  weatherDataSelector,
  windSelector,
} from "../../toolkit/weatherSlices/weatherSelector";

const CurrentWeather: FC = () => {
  const weatherData = useSelector(weatherDataSelector);
  const windData = useSelector(windSelector);
  const cityName = useSelector(citySelector);

  return (
    <div>
      <h4>Current Weather in {cityName}</h4>
      <p>Temperature: {weatherData?.temp}°C</p>
      <p>Humidity: {weatherData?.humidity}%</p>
      <p>Wind Speed: {windData?.speed} m/s</p>
    </div>
  );
};

export default CurrentWeather;
