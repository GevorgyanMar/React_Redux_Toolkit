import React, { FC, useEffect, useState } from "react";
import "./style.scss";
import { useAppDispatch } from "../../toolkit/store";
import {
  fetchCurrentWeather,
  fetchForecastWeather,
} from "../../toolkit/weatherSlices/controller";

import Display5DayWeathers from "./Display5DayWeathers";
import CurrentWeather from "./CurrentWeather";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { errorWeatherSelector } from "../../toolkit/weatherSlices/forecastSelector";

const WeatherComponent: FC = () => {
  const [showForecast, setShowForecast] = useState(false);
  const dispatch = useAppDispatch();
  const [city, setCity] = useState<string>("");
  const error = useSelector(errorWeatherSelector);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, []);

  const fetchWeatherData = (city?: string) => {
    if (city) {
      dispatch(
        fetchCurrentWeather({
          latitude,
          longitude,
          city: city,
        })
      );
    } else {
      dispatch(
        fetchCurrentWeather({
          latitude: latitude,
          longitude: longitude,
        })
      );
    }
  };

  const showFiveDatWeather = (city?: string) => {
    if (city) {
      dispatch(
        fetchForecastWeather({ latitude: null, longitude: null, city: city })
      );
    } else {
      dispatch(
        fetchForecastWeather({ latitude: latitude, longitude: longitude })
      );
    }
  };

  const onShowWeather = () => {
    setShowForecast(true);
    showFiveDatWeather(city);
  };

  return (
    <div className="weather-forecast-block">
      <h1>Weather Forecast</h1>

      <SearchBar onSearch={fetchWeatherData} city={city} setCity={setCity} />
      {error ? <p>{error}</p> : <CurrentWeather />}

      <div className="weather-forecast-flex">
        <button onClick={onShowWeather}>5-day weather forecast</button>
      </div>

      {showForecast ? <Display5DayWeathers /> : null}
    </div>
  );
};

export default WeatherComponent;
