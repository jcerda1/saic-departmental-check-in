import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../src/routes';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../src/store/configureStore.js';

const store = configureStore();

const Root = (props) => {

  return (
    <Provider store={store}>
      <BrowserRouter>
      {routes}
      </BrowserRouter>
    </Provider>
  )
};

export default Root;