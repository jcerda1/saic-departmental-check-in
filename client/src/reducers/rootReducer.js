import { combineReducers } from 'redux';
import contact from './contactReducer.js';
import cases from './casesReducer.js';
import newCase from './newCaseReducer.js';
import selectedCase from './selectedCaseReducer.js';

const rootReducer = combineReducers({
  contact,
  cases,
  newCase,
  selectedCase
});

export default rootReducer;
