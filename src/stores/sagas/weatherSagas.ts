import { petActions, ISetCurrentWeather } from './../types/petType';
import { setCurrentWeather } from '../actions';
import { IGetCurrentWeather } from '../types/';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchForecast } from '../../api/darkSkyApi';

function* getCurrentWeatherSaga(action: IGetCurrentWeather) {
  try {
    const res = yield call(fetchForecast, action.data.lat, action.data.lng);
    const weather = res.data;
    const { icon, precipType, precipIntensity, summary } = weather.currently;
    yield put<ISetCurrentWeather>(
      setCurrentWeather({ icon, precipType, precipIntensity, summary })
    );
    console.log(weather);
  } catch (error) {
    console.log(error);
  }
}
export function* watchWeatherSagas() {
  yield takeLatest(petActions.GET_CURRENT_WEATHER, getCurrentWeatherSaga);
}
