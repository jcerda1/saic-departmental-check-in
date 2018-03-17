import initialState from './initialState.js';

const selectedCase = (state = initialState.case, { type, status, loading, editing }) => {
  switch(type) {
    case 'TOGGLE_EDITING':
      let newState = editing;
      return newState;
    default:
      return state;
  }
};

export default selectedCase;