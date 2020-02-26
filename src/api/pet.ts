import { IPet } from './../stores/types/petType';
import axios, { AxiosInstance } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export const fetchAllPets = (): Promise<AxiosInstance> => instance.get('/pets');
export const fetchCreatePet = (pet: IPet): Promise<AxiosInstance> =>
  instance.post('/pet', pet);
