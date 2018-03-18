import initialState from './initialState.js';

const selectedCase = (state = initialState.selectedCase, action) => {
  const { type, status, loading, caseId } = action;
  let newState;

  switch(type) {
    case 'RECIEVE_SELECTED':
      newState = { ...state, caseId };
      console.log('recieving selected state', state, newState)
      return newState;
    case 'RECIEVE_LOADING':
      newState = { ...state, loading };
      return newState;
    case 'RECIEVE_STATUS':
      newState = { ...state, status };
      return newState;
    default:
      return state;
  }
};

export default selectedCase;