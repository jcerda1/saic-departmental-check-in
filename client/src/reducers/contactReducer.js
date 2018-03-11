const contact = (state = '', action) => {
  switch(action.type) {
    case 'RECEIVE_CONTACT':
      let newState = action.contact;
      return newState;
    default:
      return state;
  }
}
 export default contact;