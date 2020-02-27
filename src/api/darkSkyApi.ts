import axios, { AxiosInstance } from 'axios';

const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f8ee0ea49c6382af42966d781ba6f9a5/`,
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
