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
  render(Root);

  module.hot.accept('../containers/Root.js', () => {
    const nextApp = require('../containers/Root.js').default;
    render(nextApp);
  })
} else {
  render(Root);
}
