import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../src/routes';
import { Router } from 'react-router';

const Root = (props) => {
  const { store, history } = props;

  return (
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>
  )
};

export default Root;