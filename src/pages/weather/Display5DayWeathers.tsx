import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  errorWeatherSelector,
  forecastWeatherListSelector,
} from "../../toolkit/weatherSlices/forecastSelector";

type WeatherData = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  date: string;
};

const Display5DayWeathers: FC = () => {
  const forecast = useSelector(forecastWeatherListSelector);
  const error = useSelector(errorWeatherSelector);

  const forecastData = forecast?.map((item) => ({
    temperature: item.main.temp,
    humidity: item.main.humidity,
    windSpeed: item.wind.speed,
    date: item.dt_txt,
  }));

  const forecastList = forecastData?.map((data) => (
    <li key={data.date}>
      <p>Date: {new Date(data.date).toLocaleDateString()}</p>

      <p>Temperature: {data.temperature}</p>
      <p>Humidity: {data.humidity}</p>
      <p>Wind Speed: {data.windSpeed}</p>
    </li>
  ));

  return (
    <div className="day-weather-block">
      <h4>5-Day Weather Forecast</h4>
      {error ? <p>{error}</p> : <ul>{forecastList}</ul>}
    </div>
  );
};

export default Display5DayWeathers;
