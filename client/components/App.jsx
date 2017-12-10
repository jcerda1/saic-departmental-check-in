import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import { BrowserRouter, Route, Link, browserHistory } from 'react-router-dom';
import '../css/styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: ''
    };
  }

  getUser() {

  }

  render() {
    return <div>Hello World</div>
  }
}

export default App;
