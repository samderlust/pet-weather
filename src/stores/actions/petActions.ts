import {
  ISetAllPetActions,
  IPet,
  ICreateNewPet,
  ISetErrorMessage,
  ISetCurrentPet,
  IGetPetById,
  IWeather,
  ISetCurrentWeather,
  IGetCurrentWeather
} from './../types/petType';
import { IGetAllPetsActions, petActions } from '../types/petType';
export const getAllPets = (): IGetAllPetsActions => ({
  type: petActions.GET_ALL_PETS
});

export const setAllPests = (petsList: IPet[]): ISetAllPetActions => ({
  type: petActions.SET_ALL_PETS,
  data: petsList
});

export const createNewPet = (pet: IPet, history: any): ICreateNewPet => ({
  type: petActions.CREATE_A_PET,
  data: pet,
  history
});
export const setErrorMessage = (msg: string): ISetErrorMessage => ({
  type: petActions.SET_ERROR_MESSAGE,
  data: msg
});

export const getPetById = (id: number): IGetPetById => ({
  type: petActions.GET_PET_BY_ID,
  data: id
});

export const setCurrentPet = (
  pet: IPet | null | undefined
): ISetCurrentPet => ({
  type: petActions.SET_CURRENT_PET,
  data: pet
});

export const setCurrentWeather = (weather: IWeather): ISetCurrentWeather => ({
  type: petActions.SET_CURRENT_WEATHER,
  data: weather
});

export const getCurrentWeather = (
  lat: number,
  lng: number
): IGetCurrentWeather => ({
  type: petActions.GET_CURRENT_WEATHER,
  data: { lat, lng }
});
