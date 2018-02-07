import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

if (module.hot && HOT) {
  console.log("HOT")
  render(App);

  module.hot.accept('../components/App.jsx', () => {
    console.log('Reloading')
    const nextApp = require('../components/App.jsx').default;
    render(nextApp);
  })
} else {
  render(App);
}
