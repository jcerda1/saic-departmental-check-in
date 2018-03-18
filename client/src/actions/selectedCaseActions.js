import axios from 'axios';
import Promise from 'bluebird';

/*** Action Creators ***/
const recieveSelectedState = (caseId) => {
  return {
    type: 'RECIEVE_SELECTED',
    caseId: caseId
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
    newStatus: str
  };
};


/*** selectedCase Actions ***/

const handleUpdateClick = (caseId) => (dispatch, getState) => {
  dispatch(recieveSelectedState(caseId));
};

const handleSelect = (event) => (dispatch, getState) => {
  dispatch(recieveStatus(event.target.value));
};

const updateCaseStatus = (event) => (dispatch, getState) => {
  // return new Promise((resolve, reject) => {

  //   axios.put('/cases', {
  //   status: status,
  //   id: caseId
  //   })
  //   .then(() => {
  //     console.log("successfully updated");
  //     resolve();
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     reject(err);
  //   });
  // });
};

export { handleUpdateClick, handleSelect, updateCaseStatus }