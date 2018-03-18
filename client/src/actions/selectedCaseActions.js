import axios from 'axios';

/*** Action Creators ***/
const setEditingState = (bool) => {
  return {
    type: 'SET_EDITING',
    editing: bool
  };
};

const setLoadingState = (bool) => {
  return {
    type: 'SET_LOADING',
    loading: bool
  };
};

const setStatus = (str) => {
  return {
    type: 'SET_STATUS',
    status: str
  };
};



/*** selectedCase Actions ***/