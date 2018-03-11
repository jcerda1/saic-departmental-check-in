import { combineReducers } from 'redux';
import contact from './contactReducer.js';
import cases from './casesReducer.js';

const rootReducer = combineReducers({
  contact,
  cases
});

export default rootReducer;
