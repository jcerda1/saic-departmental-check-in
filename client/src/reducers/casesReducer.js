import initialState from './initialState.js';

const cases = (state = initialState.cases, action) => {
  switch(action.type) {
    case 'RECEIVE_CASES':
      let newState = action.cases;
      return newState;
    default:
      return state;
  }
}
 export default cases;