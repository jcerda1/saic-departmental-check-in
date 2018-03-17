import initialState from './initialState.js';

const contact = (state = initialState.contact, { type, contact }) => {
  switch(type) {
    case 'RECEIVE_CONTACT':
      let newState = contact;
      return newState;
    default:
      return state;
  }
}
 export default contact;