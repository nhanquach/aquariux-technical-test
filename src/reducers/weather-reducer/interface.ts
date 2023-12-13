import { ACTIONS } from "./actions";

export interface IWeatherInfo {
  id: number;
  name: string;
  country: string;
  weather: string;
  description: string;
  temp_min: number;
  temp_max: number;
  humidity: number;
  timezone: number;
  coord: {
    lon: number;
    lat: number;
  };
  timeStamp: number;
}

export interface IStoreState {
  isLoading: boolean;
  error: null | string;
  city: string;
  country: string;
  weather?: IWeatherInfo;
  history: IWeatherInfo[];
}

export interface IStoreAction {
  type: ACTIONS;
  payload: any;
  dispatch: any;
}

export interface IOpenWeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
