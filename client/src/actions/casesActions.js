import axios from 'axios';

/*** Action Creators ***/
const receiveCases = (data) => {
  console.log('receiving cases', data.data.records)
  return {type: 'RECEIVE_CASES', cases: data.data.records};
}

/*** Case Actions ***/

const getCases = (id) => (dispatch, getState) => {
  console.log('Getting Cases')
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