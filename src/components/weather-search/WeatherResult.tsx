import React, { useContext } from "react";

import { WeatherContext } from "../../context/WeatherContext";
import { IStoreState } from "../../reducers/weather-reducer/interface";

const WeatherResult = () => {
  const state = useContext<IStoreState>(WeatherContext);

  if (!state.weather) {
    return null;
  }

  if (state.error) {
    return <div className="weather-result-error">{state.error}</div>;
  }

  if (state.isLoading) {
    return <div className="weather-result-loading">Loading...</div>;
  }

  const {
    name,
    country,
    weather,
    timezone,
    description,
    temp_max,
    temp_min,
    humidity,
  } = state.weather;

  const calculateWithTimeZone = () => {
    const nowInLocalTime = new Date().toUTCString() + 1000 * timezone;
    const localTime = new Date(nowInLocalTime).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return localTime
      .replace(/[,.]/g, "")
      .replace("a.m", "AM")
      .replace("p.m", "PM");
  };

  return (
    <div className="weather-result">
      <div className="location">
        {name}, {country}
      </div>
      <div className="weather">{weather}</div>
      <table>
        <tbody>
          <tr>
            <td className="label description">Description:</td>
            <td className="description-data">{description}</td>
          </tr>
          <tr>
            <td className="label temperature">Temperature:</td>
            <td className="temperature-data">
              {temp_min}°C ~ {temp_max}°C
            </td>
          </tr>
          <tr>
            <td className="label humidity">Humidity:</td>
            <td className="humidity-data">{humidity}%</td>
          </tr>
          <tr>
            <td className="label time">Time:</td>
            <td className="time-data">{calculateWithTimeZone()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherResult;
