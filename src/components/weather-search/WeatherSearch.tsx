import React, { useContext, useEffect, useState } from "react";

import {
  WeatherContext,
  WeatherDispatchContext,
} from "../../context/WeatherContext";
import { ACTIONS } from "../../reducers/weather-reducer/actions";
import { IStoreState } from "../../reducers/weather-reducer/interface";

const WeatherSearch: React.FC<{}> = () => {
  const [city, setCity] = useState("Ho Chi Minh");
  const [country, setCountry] = useState("VN");

  const state = useContext<IStoreState>(WeatherContext);
  const dispatch = useContext(WeatherDispatchContext);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS.SEARCH,
      payload: {
        city,
        country,
        dispatch,
      },
    });
  };

  const handleClear = () => {
    setCity("");
    setCountry("");
  };

  const handleCityChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const handleCountryChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCountry(e.currentTarget.value);
  };

  useEffect(() => {
    if (state) {
      setCity(state.city);
      setCountry(state.country);
    }
  }, [state]);

  return (
    <form
      className="weather-search-container"
      onSubmit={handleSearch}
      onReset={handleClear}
    >
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={handleCityChange}
      />
      <label htmlFor="country">Country:</label>
      <input
        type="text"
        name="country"
        id="country"
        value={country}
        onChange={handleCountryChange}
      />
      <button type="submit" disabled={state.isLoading}>
        Search
      </button>
      <button type="reset">Clear</button>
    </form>
  );
};

export default WeatherSearch;
