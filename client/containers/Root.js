import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

const Root = (props) => {
  const { store, history } = this.props;

  return (
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>
  )

};