import axios from 'axios';

/*** Action Creators ***/
const editSubject = (data) => {
  return {type: 'EDIT_SUBJECT', subject: data};
}

/*** newCase Actions ***/

const handleEdit = (event) => (dispatch, getState) => {
  dispatch(editSubject(event.target.value));
}

export {handleEdit};