import initialState from './initialState.js';

const selectedCase = (state = initialState.selectedCase, action) => {
  const { type, status, loading, editing } = action;
  let newState;

  switch(type) {
    case 'SET_EDITING':
      let newState = { ...state, editing };
      return newState;
    case 'SET_LOADING':
      let newState = { ...state, loading };
      return newState;
    default:
      return state;
  }
};

export default selectedCase;