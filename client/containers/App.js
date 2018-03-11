import React from 'react';
import Account from '../components/Account.jsx';
import Scan from '../components/Scan.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContact } from '../src/actions/contactActions.js';
import * as contactActions from '../src/actions/contactActions.js';

const App = ({ userObj, contactActions }) => {
  return userObj ? <Account user={userObj}/> : <Scan contactActions={contactActions}/>;
};

const mapStateToProps = (state) => {
    return {
      userObj: state.contact
    };
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