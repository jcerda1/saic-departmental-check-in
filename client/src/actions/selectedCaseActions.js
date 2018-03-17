import axios from 'axios';

/*** Action Creators ***/
const setEditing = (data) => {
  return {
    type: 'SET_EDITING',
    editing: data
  };


};


/*** Contact Actions ***/