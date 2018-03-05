import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../src/routes';
import { Router } from 'react-router';
import configureStore from '../src/store/configureStore.js';

const store = configureStore();

const Root = (props) => {

  return (
    <Provider store={store}>
      <Router routes={routes}/>
    </Provider>
  )
};

export default Root;