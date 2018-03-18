import initialState from './initialState.js';

const selectedCase = (state = initialState.selectedCase, action) => {
  const { type, status, loading, editing } = action;

  switch(type) {
    case 'SET_EDITING':
      let newState = { ...state, editing };
      return newState;
    case 'SET_EDITING':
      let newState = editing;
      return newState;
    default:
      return state;
  }
};

export default selectedCase;