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

if (module.hot) {
  console.log("HOT")
  render(App);

  module.hot.accept('../components/App.jsx', () => {
    const nextApp = require('../components/App.jsx').default;
    render(NextApp);
  })
} else {
  render(App);
}
