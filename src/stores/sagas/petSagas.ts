import { setAllPests, setErrorMessage, setCurrentPet } from '../actions';
import {
  ISetAllPetActions,
  ICreateNewPet,
  IGetPetById,
  ISetErrorMessage,
  IGetAllPetsActions,
  petActions
} from '../types';
import { fetchAllPets, fetchCreatePet, fetchPetById } from '../../api/pet';

import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchAllPetsSaga(action: IGetAllPetsActions) {
  try {
    const res = yield call(fetchAllPets);
    yield put<ISetAllPetActions>(setAllPests(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* createNewPetSaga(action: ICreateNewPet) {
  try {
    yield call(fetchCreatePet, action.data);
    yield put(action.history.push('/'));
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.error.message);
      const err = error.response.data.error.message;
      yield put<ISetErrorMessage>(setErrorMessage(err));
    }
  }
}

function* getPetByIdSaga(action: IGetPetById) {
  yield put(setCurrentPet(undefined));
  try {
    const res = yield call(fetchPetById, action.data);
    const pet = res.data;
    yield put(setCurrentPet(pet));
  } catch (error) {
    console.log(error);
    yield put(setCurrentPet(null));
  }
}
export function* watchPetSagas() {
  yield takeLatest(petActions.GET_ALL_PETS, fetchAllPetsSaga);
  yield takeLatest(petActions.CREATE_A_PET, createNewPetSaga);
  yield takeLatest(petActions.GET_PET_BY_ID, getPetByIdSaga);
}
