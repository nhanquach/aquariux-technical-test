import React, { useReducer } from "react";
import WeatherSearch from "./components/weather-search";
import WeatherSearchHistory from "./components/weather-history";

import "./App.css";
import WeatherReducer from "./reducers/weather-reducer/weatherReducer";
import {
  WeatherContext,
  WeatherDispatchContext,
} from "./context/WeatherContext";
import WeatherResult from "./components/weather-search/WeatherResult";
import { IStoreState } from "./reducers/weather-reducer/interface";

// const initialState: IStoreState = {
//   isLoading: false,
//   city: "",
//   country: "",
//   weather: undefined,
//   history: [],
// };

const initialState: IStoreState = {
  isLoading: false,
  error: null,
  city: "Ho Chi Minh",
  country: "VN",
  weather: {
    id: 1566083,
    name: "Ho Chi Minh City",
    country: "VN",
    weather: "Clouds",
    description: "broken clouds",
    temp_min: 308.1,
    temp_max: 308.1,
    humidity: 41,
    timezone: 25200,
    coord: {
      lon: 106.7012,
      lat: 10.7763,
    },
    timeStamp: 1702451725586,
  },
  history: [
    {
      id: 1566083,
      name: "Ho Chi Minh City",
      country: "VN",
      weather: "Clouds",
      description: "broken clouds",
      temp_min: 30,
      temp_max: 30,
      humidity: 41,
      timezone: 25200,
      coord: {
        lon: 106.7012,
        lat: 10.7763,
      },
      timeStamp: 1702451725548,
    },
    {
      id: 1853909,
      name: "Osaka",
      country: "JP",
      weather: "Clouds",
      description: "few clouds",
      temp_min: 22,
      temp_max: 22,
      humidity: 47,
      timezone: 32400,
      coord: {
        lon: 135.5022,
        lat: 34.6937,
      },
      timeStamp: 1702452378980,
    },
  ],
};

function App() {
  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  return (
    <div className="App">
      <header className="title">Today's Weather</header>
      <WeatherContext.Provider value={state}>
        <WeatherDispatchContext.Provider value={dispatch}>
          <WeatherSearch />
          <WeatherResult />
          <WeatherSearchHistory />
        </WeatherDispatchContext.Provider>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
