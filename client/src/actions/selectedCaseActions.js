import axios from 'axios';

/*** Action Creators ***/
const setEditingState = (data) => {
  return {
    type: 'SET_EDITING',
    editing: data
  };
};

const setLoadingState = (data) => {
  return {
    type: 'SET_LOADING',
    loading: data
  };
};

const setStatus = (data) => {
  return {
    type: 'SET_STATUS',
    status: data
  };
};



/*** selectedCase Actions ***/