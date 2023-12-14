import { getWeatherInfo } from "../../services/getWeatherInfo";

import { ACTIONS } from "./actions";
import { IStoreAction, IStoreState } from "./interface";

const WeatherReducer = (
  state: IStoreState,
  action: IStoreAction,
): IStoreState => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SEARCH: {
      getWeatherInfo(payload);

      return {
        ...state,
        isLoading: true,
        city: payload.city,
        country: payload.country,
      };
    }
    case ACTIONS.SEARCH_SUCCESS: {
      const newHistory = [payload, ...state.history];

      return {
        ...state,
        isLoading: false,
        error: null,
        weather: payload,
        history: newHistory,
      };
    }
    case ACTIONS.SEARCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    case ACTIONS.REMOVE_HISTORY: {
      const newHistory = state.history.filter(
        (item) => item.timeStamp !== payload.timeStamp,
      );

      return {
        ...state,
        history: newHistory,
      };
    }
    default: {
      return state;
    }
  }
};

export default WeatherReducer;
