import { Action } from 'redux';

export enum petActions {
  GET_ALL_PETS = 'GET_ALL_PETS',
  SET_ALL_PETS = 'SET_ALL_PETS',
  CREATE_A_PET = 'CREATE_A_PET',
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
  GET_PET_BY_ID = 'GET_PET_BY_ID',
  SET_CURRENT_PET = 'SET_CURRENT_PET',
  GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER',
  SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER'
}

export interface IPetReducers {
  allPets: IPet[];
  error: string;
  currentPet: IPet | null | undefined;
  currentWeather: IWeather | undefined;
}

export interface IPet {
  id: number;
  name: string;
  breed: string;
  type: string;
  location: string;
  latitude: number;
  longitude: number;
}

export interface IWeather {
  icon: string;
  precipType: string;
  precipIntensity: number;
  summary: string;
}

export interface IGetAllPetsActions extends Action {
  type: petActions.GET_ALL_PETS;
}

export interface ISetAllPetActions extends Action {
  type: petActions.SET_ALL_PETS;
  data: IPet[];
}

export interface ICreateNewPet extends Action {
  type: petActions.CREATE_A_PET;
  data: IPet;
  history: any;
}

export interface ISetErrorMessage extends Action {
  type: petActions.SET_ERROR_MESSAGE;
  data: string;
}
export interface IGetPetById extends Action {
  type: petActions.GET_PET_BY_ID;
  data: number;
}

export interface ISetCurrentPet extends Action {
  type: petActions.SET_CURRENT_PET;
  data: IPet | null | undefined;
}

export interface ISetCurrentWeather extends Action {
  type: petActions.SET_CURRENT_WEATHER;
  data: IWeather | undefined;
}

export interface IGetCurrentWeather extends Action {
  type: petActions.GET_CURRENT_WEATHER;
  data: {
    lat: number;
    lng: number;
  };
}
export type IPetAction =
  | IGetAllPetsActions
  | ISetAllPetActions
  | ICreateNewPet
  | IGetPetById
  | ISetCurrentPet
  | ISetCurrentWeather
  | ISetErrorMessage;
