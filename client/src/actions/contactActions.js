import axios from 'axios';

/*** Action Creators ***/
const receiveContact = (data) => {
  return {type: 'RECEIVE_CONTACT', contact: data.contact};
}

/*** Contact Actions ***/

const getContact = () => (dispatch, getState) => {

}