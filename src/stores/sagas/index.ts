import { all, fork } from 'redux-saga/effects';
import { watchPetSagas } from './petSagas';

export default function* rootSaga() {
  yield all([watchPetSagas()]);
}
