import axios from 'axios';
import Promise from 'bluebird';

/*** Action Creators ***/
const receiveCases = (data) => {
  return {type: 'RECEIVE_CASES', cases: data.data.records};
}

/*** Case Actions ***/
const getCases = (id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    axios.get('/cases', {
          params: { id }
        })
        .then(data => {
          dispatch(receiveCases(data));
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
  });
};

export { getCases };