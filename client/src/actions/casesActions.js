import axios from 'axios';
import Promise from 'bluebird';

/*** Action Creators ***/
const receiveCases = (data) => {
  return {type: 'RECEIVE_CASES', cases: data.data.records};
}

/*** Case Actions ***/

const getCases = (id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    console.log('getting cases')
    axios.get('/cases', {
          params: {id: id}
        })
        .then(data => {
          dispatch(receiveCases(data));
          resolve(data);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
  });
};

export {getCases};