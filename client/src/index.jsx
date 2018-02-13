import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from '../components/App.jsx';
import initialState from './reducers/initialState.js';

const store = configureStore(initialState);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

if (module.hot && HOT) {
  render(App);

  module.hot.accept('../components/App.jsx', () => {
    console.log('Reloading')
    const nextApp = require('../components/App.jsx').default;
    render(nextApp);
  })
} else {
  render(App);
}
