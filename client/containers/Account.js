import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountInfo from '../components/AccountInfo.jsx';

const Account = (props) => {
  console.log(props);
  return <AccountInfo/>;
};

const mapStateToProps = (state) => {
  return {...state};
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountInfo);