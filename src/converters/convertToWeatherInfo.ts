import {
  IOpenWeatherResponse,
  IWeatherInfo,
} from "../reducers/weather-reducer/interface";

export const convertToWeatherInfo = (
  data: IOpenWeatherResponse,
): IWeatherInfo | null => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    country: data.sys.country,
    weather: data.weather[0].main,
    description: data.weather[0].description,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    humidity: data.main.humidity,
    timezone: data.timezone,
    coord: data.coord,
    timeStamp: new Date().getTime(),
  };
};
