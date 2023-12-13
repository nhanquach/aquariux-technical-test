import React, { useContext, useState } from "react";
import {
  WeatherContext,
  WeatherDispatchContext,
} from "../../context/WeatherContext";
import { ACTIONS } from "../../reducers/weather-reducer/actions";

const WeatherSearch = () => {
  const [city, setCity] = useState("Ho Chi Minh");
  const [country, setCountry] = useState("VN");

  const state = useContext(WeatherContext);
  const dispatch = useContext(WeatherDispatchContext);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS.SEARCH,
      payload: {
        city: city.toLowerCase(),
        country: country.toLowerCase(),
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
