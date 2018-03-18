import initialState from './initialState.js';

const selectedCase = (state = initialState.selectedCase, action) => {
  const { type, status, loading, editing } = action;
  let newState;

  switch(type) {
    case 'RECIEVE_EDITING':
      newState = { ...state, editing };
      console.log('recieving editing state', state, newState)
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