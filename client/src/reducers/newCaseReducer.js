const newCase = (state = { subject: '' }, action) => {
  switch(action.type) {
    case 'EDIT_SUBJECT':
      newState.subject = action.subject;
      return newState;
    default:
      return state;
  }
}
 export default newCase;