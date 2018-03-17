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

const toggleLoadingState = () => (dispatch, getState) => {
  const { loading } = getState().newCase;
  dispatch(setLoadingState(!loading));
}

const createNew = (event) => (dispatch, getState) => {
  const { contact, newCase } = getState();
  const toggleLoading = toggleLoadingState().bind(null, dispatch, getState);

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

export { handleEdit, toggleLoadingState, createNew };