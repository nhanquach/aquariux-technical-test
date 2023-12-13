import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import HistoryItem from "./HistoryItem";
import { IWeatherInfo } from "../../reducers/weather-reducer/interface";

const WeatherSearchHistory = () => {
  const state = useContext(WeatherContext);

  const { history } = state;

  return (
    <div className="search-history">
      <div className="title">Search History</div>
      {history.length === 0 ? (
        <div className="no-record">No Record</div>
      ) : (
        history.map((item: IWeatherInfo, index: number) => {
          return <HistoryItem key={item.timeStamp} item={item} index={index} />;
        })
      )}
    </div>
  );
};

export default WeatherSearchHistory;
