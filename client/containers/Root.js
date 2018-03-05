import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../src/routes';
import { Router } from 'react-router';

const Root = (props) => {

  return (
    <Provider store={props.store}>
      <Router routes={routes}/>
    </Provider>
  )
};

export default Root;