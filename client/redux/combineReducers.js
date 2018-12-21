import { combineReducers } from 'redux';
import { dummyReducer, dummyReducer2 } from './reducers';

export default combineReducers({
  reducer1: dummyReducer,
  reducer2: dummyReducer2,
});
