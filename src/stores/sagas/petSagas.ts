import { CreatePet } from './../../containers/CreatePet';
import { setAllPests, setErrorMessage } from './../actions/petActions';
import {
  ISetAllPetActions,
  ICreateNewPet,
  ISetErrorMessage
} from './../types/petType';
import { fetchAllPets, fetchCreatePet } from './../../api/pet';
import { IGetAllPetsActions } from '../types';
import { petActions } from './../types';
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

export function* watchPetSagas() {
  yield takeLatest(petActions.GET_ALL_PETS, fetchAllPetsSaga);
  yield takeLatest(petActions.CREATE_A_PET, createNewPetSaga);
}
