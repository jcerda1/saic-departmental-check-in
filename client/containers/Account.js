import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountInfo from '../components/AccountInfo.jsx';
import CaseList from '../components/CaseList.jsx';
import * as casesActions from '../src/actions/casesActions.js';

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

const mapDispatchToProps = (dispatch) => {
    return {
      casesActions: bindActionCreators(casesActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);