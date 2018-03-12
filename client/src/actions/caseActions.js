import axios from 'axios';

/*** Action Creators ***/


/*** Case Actions ***/

const createNew = (event) => (dispatch, getState) => {
  const { contact, newCase } = getState();

  axios.post('/cases', {
        id: contact.Id,
        subject: newCase.subject
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })

}

export {createNew};