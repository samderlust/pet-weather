import { darkSkyKey } from './../../secrect';
import axios, { AxiosInstance } from 'axios';

const instance = axios.create({
  baseURL: `https://api.darksky.net/forecast/${darkSkyKey}/`,
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
