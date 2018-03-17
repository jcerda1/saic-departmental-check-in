import axios from 'axios';
import{ getCases } from './casesActions.js';
import * as newCaseActions from './newCaseActions.js';

/*** Action Creators ***/


/*** Case Actions ***/

const createNew = (event) => (dispatch, getState) => {
  const { contact, newCase } = getState();
  const toggleLoading = newCaseActions.toggleLoading().bind(null, dispatch, getState);

  toggleLoading();

  axios.post('/cases', {
    id: contact.Id,
    subject: newCase.subject
  })
  .then(data => {
    getCases(contact.Id)(dispatch)
    .then(cases => {
      toggleLoading();
    });
  })
  .catch(err => {
    console.log(err);
  })
};

export { createNew };