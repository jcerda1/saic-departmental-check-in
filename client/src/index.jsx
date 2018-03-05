import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Root from '../containers/Root.js';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
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
  render(Root);
}
