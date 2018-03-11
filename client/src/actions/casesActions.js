import axios from 'axios';

/*** Action Creators ***/
const receiveCases = (data) => {
  return {type: 'RECEIVE_CASES', cases: data.data.records};
}

/*** Case Actions ***/

const getCases = (id) => (dispatch, getState) => {
  axios.get('/cases', {
        params: {id: id}
      })
      .then(data => {
        dispatch(receiveCases(data));
      })
      .catch(err => {
        console.log(err);
      });
}

export {getCases};