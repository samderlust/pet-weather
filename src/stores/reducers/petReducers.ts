import { IPet, IWeather } from './../types/petType';
import { IPetReducers, IPetAction, petActions } from '../types/petType';
const INIT_STATE: IPetReducers = {
  allPets: [],
  error: '',
  currentPet: null,
  currentWeather: undefined
};
export const petReducer = (
  state: IPetReducers = INIT_STATE,
  action: IPetAction
): IPetReducers => {
  switch (action.type) {
    case petActions.SET_ALL_PETS:
      return { ...state, allPets: action.data };
    case petActions.SET_ERROR_MESSAGE:
      return { ...state, error: action.data };
    case petActions.SET_CURRENT_PET:
      return { ...state, currentPet: action.data };
    case petActions.SET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.data };
    default:
      return state;
  }
};
