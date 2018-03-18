import axios from 'axios';

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
  const { caseId, newStatus } = getState().selectedCase;
  console.log(caseId, newStatus)

  axios.put('/cases', {
    status: newStatus,
    id: caseId
  })
  .then(() => {
    console.log("successfully updated");
  })
  .catch(err => {
    console.log(err);
  });
};

export { handleUpdateClick, handleSelect, updateCaseStatus }