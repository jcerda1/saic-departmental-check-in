import initialState from './initialState.js';

const cases = (state = initialState.cases, { type, cases }) => {
  switch(type) {
    case 'RECEIVE_CASES':
      let newState = cases;
      return newState;
    default:
      return state;
  }
};

export default cases;