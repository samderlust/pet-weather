import { IPetReducers, IPetAction, petActions } from '../types/petType';
const INIT_STATE: IPetReducers = {
  allPets: [],
  error: ''
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
    default:
      return state;
  }
};
