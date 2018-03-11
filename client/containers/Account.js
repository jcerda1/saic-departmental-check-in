import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountInfo from '../components/AccountInfo.jsx';
import CaseList from '../components/CaseList.jsx';
import * as contactActions from '../src/actions/contactActions.js';

const Account = ({ contact, casesActions }) => {
  return (
      <div>
        <AccountInfo {...contact}/>
        <CaseList/>
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