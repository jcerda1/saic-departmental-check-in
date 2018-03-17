import initialState from './initialState.js';

const newCase = (state = initialState.newCase, { type, subject, loading }) => {
  let newState;
  switch(type) {
    case 'EDIT_SUBJECT':
      newState = { ...state, subject };
      return newState;
    case 'SET_LOADING':
      newState = { loading, subject: '' };
      return newState;
    default:
      return state;
  }
}
 export default newCase;