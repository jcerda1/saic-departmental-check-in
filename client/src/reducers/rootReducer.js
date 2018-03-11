import { combineReducers } from 'redux';
import contact from './contactReducer.js';
import cases from './casesReducer.js';
import newCase from './newCaseReducer.js';

const rootReducer = combineReducers({
  contact,
  cases,
  newCase,
});

export default rootReducer;
