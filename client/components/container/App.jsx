import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = ({ user }) => {
  return {
    user: user
  }
};
