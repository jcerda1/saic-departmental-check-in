import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountInfo from '../components/AccountInfo.jsx';
import Cases from './Cases.js';

const Account = ({ contact, casesActions }) => {
  return (
      <div className="flex-container">
        <AccountInfo {...contact}/>
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