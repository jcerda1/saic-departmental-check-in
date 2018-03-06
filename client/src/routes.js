import React from 'react';
import { Route } from 'react-router';
import App from '../components/App.jsx';
import Account from '../components/Account.jsx';

export default (
  <div>
    <Route path="/" component={App}></Route>
    <Route path="/account" component={Account}></Route>
  </div>
)