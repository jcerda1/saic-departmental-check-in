import initialState from './initialState.js';

const selectedCase = (state = initialState.selectedCase, action) => {
  const { type, status, loading, editing } = action;

  switch(type) {
    case 'TOGGLE_EDITING':
      let newState = editing;
      return newState;
    default:
      return state;
  }
};

export default selectedCase;