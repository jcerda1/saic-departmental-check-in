import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Account from '../components/Account.jsx';
import Scan from '../components/Scan.jsx';
import * as contactActions from '../src/actions/contactActions.js';

const App = ({ contact, contactActions }) => {
  return contact ? <Account user={contact}/> : <Scan {...contactActions}/>;
};

const mapStateToProps = (state) => {
  return {...state};
};

const mapDispatchToProps = (dispatch) => {
    return {
      contactActions: bindActionCreators(contactActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);