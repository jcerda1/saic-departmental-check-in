const newCase = (state = '', action) => {
  switch(action.type) {
    case 'EDIT_SUBJECT':
      let newState = action.subject;
      return newState;
    default:
      return state;
  }
}
 export default cases;