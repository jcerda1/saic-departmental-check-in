const newCase = (state = { subject: '' , updating: false }, action) => {
  let newState;
  switch(action.type) {
    case 'EDIT_SUBJECT':
      newState = { ...state, subject: action.subject };
      return newState;
    case 'UPDATE':
      newState = { ...state, updating: action.updating };
      return newState;
    default:
      return state;
  }
}
 export default newCase;