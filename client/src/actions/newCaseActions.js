import axios from 'axios';

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

export { handleEdit, toggleLoadingState };