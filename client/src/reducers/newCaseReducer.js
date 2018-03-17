const newCase = (state = { subject: '' , updating: false }, { type, subject, updating }) => {
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