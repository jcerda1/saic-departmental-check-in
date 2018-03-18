import initialState from './initialState.js';

const selectedCase = (state = initialState.selectedCase, action) => {
  const { type, newStatus, loading, caseId } = action;
  let newState;

  switch(type) {
    case 'RECIEVE_SELECTED':
      newState = { ...state, caseId };
      return newState;
    case 'RECIEVE_LOADING':
      newState = { ...state, loading };
      return newState;
    case 'RECIEVE_STATUS':
      newState = { ...state, newStatus };
      return newState;
    default:
      return state;
  }
};

export default selectedCase;