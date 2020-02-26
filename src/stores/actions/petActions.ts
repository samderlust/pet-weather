import {
  ISetAllPetActions,
  IPet,
  ICreateNewPet,
  ISetErrorMessage
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
