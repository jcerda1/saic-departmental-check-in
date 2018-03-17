import initialState from './initialState.js';

const newCase = (state = initialState.newCase, { type, subject, updating }) => {
  let newState;
  switch(type) {
    case 'EDIT_SUBJECT':
      newState = { ...state, subject };
      return newState;
    case 'UPDATE':
      newState = { updating, subject: '' };
      return newState;
    default:
      return state;
  }
}
 export default newCase;