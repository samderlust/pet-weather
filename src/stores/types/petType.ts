import { Action } from 'redux';

export enum petActions {
  GET_ALL_PETS = 'GET_ALL_PETS',
  SET_ALL_PETS = 'SET_ALL_PETS',
  CREATE_A_PET = 'CREATE_A_PET',
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
}

export interface IPetReducers {
  allPets: IPet[];
  error: string;
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

export type IPetAction =
  | IGetAllPetsActions
  | ISetAllPetActions
  | ICreateNewPet
  | ISetErrorMessage;
