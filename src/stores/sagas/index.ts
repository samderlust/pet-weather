import { all, fork } from 'redux-saga/effects';
import { watchPetSagas } from './petSagas';
import { watchWeatherSagas } from './weatherSagas';

export default function* rootSaga() {
  yield all([watchPetSagas(), watchWeatherSagas()]);
}
