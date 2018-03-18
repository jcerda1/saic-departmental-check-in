import axios from 'axios';
import Promise from 'bluebird';

/*** Action Creators ***/
const recieveEditingState = (bool) => {
  return {
    type: 'RECIEVE_EDITING',
    editing: bool
  };
};

const recieveLoadingState = (bool) => {
  return {
    type: 'RECIEVE_LOADING',
    loading: bool
  };
};

const recieveStatus = (str) => {
  return {
    type: 'RECIEVE_STATUS',
    status: str
  };
};


/*** selectedCase Actions ***/
const setStatus = (event) => (dispatch, getState) => {
  dispatch(recieveStatus(event.target.value));
};

const handleUpdateClick = (event) => (dispatch, getState) => {
  dispatch(recieveEditingState(true));
};


const updateCaseStatus = (event) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {

    axios.put('/cases', {
    status: status,
    id: caseId
    })
    .then(() => {
      console.log("successfully updated");
      resolve();
    })
    .catch(err => {
      console.log(err);
      reject(err);
    });
  });
};

export { handleUpdateClick }