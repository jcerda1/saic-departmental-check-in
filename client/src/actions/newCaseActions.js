import axios from 'axios';
import{ getCases } from './casesActions.js';

/*** Action Creators ***/
const editSubject = (data) => {
  return { type: 'EDIT_SUBJECT', subject: data };
}

const setLoadingState = (data) => {
  return { type: 'SET_LOADING', loading: data };
}

/*** newCase Actions ***/
const handleEdit = (event) => (dispatch, getState) => {
  dispatch(editSubject(event.target.value));
}

const createNew = (event) => (dispatch, getState) => {
  const { contact, newCase } = getState();

  dispatch(setLoadingState(true));

  axios.post('/cases', {
    id: contact.Id,
    subject: newCase.subject
  })
  .then(data => {
    getCases(contact.Id)(dispatch)
    .then(cases => {
      dispatch(setLoadingState(false));
    });
  })
  .catch(err => {
    console.log(err);
  })
};

export { handleEdit, createNew };