import React from 'react';
import Account from '../components/Account.jsx';
import Scan from '../components/Scan.jsx';
import { connect } from 'react-redux';
import '../css/styles.css';

const App = (props) => {
  console.log(props)

  return props.userObj ? <Account/> : <Scan/>;
};

export default App;