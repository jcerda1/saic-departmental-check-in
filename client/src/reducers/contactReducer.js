const contact = (state = '', action) => {
  switch(action.type) {
    case 'RECEIVE_CONTACT':
      console.log('RECEIVE_CONTACT action');
      let newState = action.contact;
      return newState;
    default:
      return state;
  }
}
 export default contact;