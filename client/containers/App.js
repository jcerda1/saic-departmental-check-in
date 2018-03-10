import React from 'react';
import Account from '../components/Account.jsx';
import Scan from '../components/Scan.jsx';
import { connect } from 'react-redux';

const App = (props) => {
  console.log(props.userObj)
  return props.userObj ? <Account/> : <Scan/>;
};

const mapStateToProps = (state) => {
    return {
        userObj: state.contact
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);