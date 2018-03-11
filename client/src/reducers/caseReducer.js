const cases = (state = '', action) => {
  switch(action.type) {
    case 'RECEIVE_CASES':
      let newState = action.cases;
      return newState;
    default:
      return state;
  }
}
 export default contact;