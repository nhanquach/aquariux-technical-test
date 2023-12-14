import { convertToWeatherInfo } from "../converters/convertToWeatherInfo";
import { ACTIONS } from "../reducers/weather-reducer/actions";
import {
  IOpenWeatherResponse,
  IStoreAction,
  IWeatherInfo,
} from "../reducers/weather-reducer/interface";

interface IGetWeatherInfo {
  dispatch: React.Dispatch<IStoreAction>;
  city: string;
  country: string;
}

const appId = "120322f8a354c9f07cbd43c6c793d166";

const onGetWeatherInfoSuccess = ({
  dispatch,
  weatherInfoResponse,
}: {
  dispatch: React.Dispatch<IStoreAction>;
  weatherInfoResponse: IWeatherInfo;
}) => {
  dispatch({
    type: ACTIONS.SEARCH_SUCCESS,
    payload: weatherInfoResponse,
  });
};

const onGetWeatherInfoError = ({
  dispatch,
  error,
}: {
  dispatch: React.Dispatch<IStoreAction>;
  error?: string;
}) => {
  dispatch({ type: ACTIONS.SEARCH_ERROR, payload: error });
};

export const getWeatherInfo = async ({
  city,
  country,
  dispatch,
}: IGetWeatherInfo) => {
  try {
    const { lon, lat } = await searchGeoCoding({ city, country });

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`,
    );

    const openWeatherData: IOpenWeatherResponse = await response.json();

    const weatherInfoResponse = convertToWeatherInfo(openWeatherData);

    if (weatherInfoResponse) {
      onGetWeatherInfoSuccess({
        dispatch,
        weatherInfoResponse,
      });
    }
  } catch (e: any) {
    onGetWeatherInfoError({ dispatch, error: e?.message });
  }
};

const searchGeoCoding = async ({
  city,
  country,
}: {
  city: string;
  country: string;
}): Promise<{ lon: number; lat: number }> => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city?.toLowerCase()},${country?.toLowerCase()}&limit=1&appid=${appId}`,
  );

  const [location] = await response.json();

  if (location) {
    return {
      lon: location.lon,
      lat: location.lat,
    };
  } else {
    throw Error("Not found");
  }
};
