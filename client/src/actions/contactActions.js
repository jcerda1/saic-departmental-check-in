import axios from 'axios';

/*** Action Creators ***/
const receiveContact = (data) => {
  return {type: 'RECEIVE_CONTACT', contact: data.data.records[0]};
}

/*** Contact Actions ***/

const getContact = (event) => (dispatch, getState) => {
  const idNum = event.target.value;

  if (idNum.length === 7) {
    axios.get('/contact', {
      params: {id: idNum}
    })
    .then(data => {
      dispatch(receiveContact(data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export {getContact};