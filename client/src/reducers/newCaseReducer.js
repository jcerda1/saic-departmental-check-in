const newCase = (state = { subject: '' }, action) => {
  switch(action.type) {
    case 'EDIT_SUBJECT':
      let newState = { subject: action.subject };
      return newState;
    default:
      return state;
  }
}
 export default newCase;