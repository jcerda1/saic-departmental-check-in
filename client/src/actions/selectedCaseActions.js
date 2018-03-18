import axios from 'axios';
import Promise from 'bluebird';

/*** Action Creators ***/
const recieveEditingState = (bool) => {
  return {
    type: 'SET_EDITING',
    editing: bool
  };
};

const recieveLoadingState = (bool) => {
  return {
    type: 'SET_LOADING',
    loading: bool
  };
};

const recieveStatus = (str) => {
  return {
    type: 'SET_STATUS',
    status: str
  };
};


/*** selectedCase Actions ***/
const setStatus = (event) => (dispatch, getState) => {
  dispatch(recieveStatus(event.target.value));
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

export default {  }