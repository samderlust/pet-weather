import { IPet } from './../stores/types/petType';
import axios, { AxiosInstance } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3031/api',
  // baseURL: 'https://pet-shelter-samderlust.herokuapp.com/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export const fetchAllPets = (): Promise<AxiosInstance> => instance.get('/pets');
export const fetchPetById = (id: number): Promise<AxiosInstance> =>
  instance.get(`/pet/${id}`);
export const fetchCreatePet = (pet: IPet): Promise<AxiosInstance> =>
  instance.post('/pet', pet);
