import React, { useContext, useMemo } from "react";

import { WeatherDispatchContext } from "../../../context/WeatherContext";
import { ACTIONS } from "../../../reducers/weather-reducer/actions";
import { IWeatherInfo } from "../../../reducers/weather-reducer/interface";

import SearchButton from "./SearchButton";
import RemoveButton from "./RemoveButton";

interface IHistoryItemProps {
  index: number;
  item: IWeatherInfo;
}

const HistoryItem: React.FC<IHistoryItemProps> = ({ index, item }) => {
  const dispatch = useContext(WeatherDispatchContext);

  const handleSearch = () => {
    dispatch({
      type: ACTIONS.SEARCH,
      payload: {
        city: item.name,
        country: item.country,
        dispatch,
      },
    });
  };

  const handleRemoveHistory = () => {
    dispatch({
      type: ACTIONS.REMOVE_HISTORY,
      payload: {
        timeStamp: item.timeStamp,
      },
    });
  };

  const time = useMemo(() => {
    const localTime = new Date(item.timeStamp).toLocaleTimeString("en-CA", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    return localTime
      .replace(/[,.]/g, "")
      .replace("a.m", "AM")
      .replace("p.m", "PM");
  }, [item]);

  return (
    <div className="history-item">
      <div className="location">
        {index + 1}. {item.name}, {item.country}
      </div>

      <div className="actions">
        <span className="time-stamp">{time}</span>
        <SearchButton onClick={handleSearch} />
        <RemoveButton onClick={handleRemoveHistory} />
      </div>
    </div>
  );
};

export default HistoryItem;
