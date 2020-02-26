import { petReducer } from './petReducers';
import { IPetReducers } from '../types';
import { combineReducers } from 'redux';

export interface StoreState {
  petReducer: IPetReducers;
}
const rootReducer = () =>
  combineReducers<StoreState>({
    petReducer
  });

export default rootReducer;
