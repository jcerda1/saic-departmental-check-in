import axios from 'axios';

/*** Action Creators ***/
const editSubject = (data) => {
  return {type: 'EDIT_SUBJECT', subject: data};
}

const setLoading = (data) => {
  return {type: 'SET_LOADING', loading: data};
}

/*** newCase Actions ***/

const handleEdit = (event) => (dispatch, getState) => {
  dispatch(editSubject(event.target.value));
}

const toggleLoading = (args) => (dispatch, getState) => {
  const loading = getState().newCase.loading;
  dispatch(setLoading(!loading));
}

export {handleEdit, toggleLoading};