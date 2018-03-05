import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import contactReducer from './contactReducer.js';

const rootReducer = combineReducers({
  contactReducer,
  routing
});

export default rootReducer;
