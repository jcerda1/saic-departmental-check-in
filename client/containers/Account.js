import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountInfo from '../components/AccountInfo.jsx';
import NewCase from '../components/NewCase.jsx';
import Cases from './Cases.js';

const Account = ({ contact, casesActions }) => {
  return (
      <div>
        <AccountInfo {...contact}/>
        <NewCase/>
        <Cases/>
      </div>
    );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(
    mapStateToProps,
    null
)(Account);