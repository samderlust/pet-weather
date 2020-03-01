import axios, { AxiosInstance } from 'axios';

const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY as string;

const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${WEATHER_KEY}/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export const fetchForecast = (
  lat: number,
  lng: number
): Promise<AxiosInstance> => instance.get(`/${lat},${lng}`);
