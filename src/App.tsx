import React, { useReducer } from "react";

import WeatherReducer from "./reducers/weather-reducer/weatherReducer";
import {
  WeatherContext,
  WeatherDispatchContext,
} from "./context/WeatherContext";

import WeatherSearchHistory from "./components/weather-history";
import WeatherSearch from "./components/weather-search";
import WeatherResult from "./components/weather-result";

import { IStoreState } from "./reducers/weather-reducer/interface";

import "./App.css";

const initialState: IStoreState = {
  isLoading: false,
  city: "",
  country: "",
  history: [],
  weather: null,
  error: null,
};

const App: React.FC<{}> = () => {
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
};

export default App;
