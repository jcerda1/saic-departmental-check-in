import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as casesActions from '../src/actions/casesActions.js';
import CaseList from '../components/CaseList.jsx';

const Cases = ({ contact, casesActions}) => {
  const id = contact.EMPLIDPeoplesoftKey__c;
  console.log(casesActions)

  casesActions.getCases(id);
  return <CaseList/>;
};

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
)(Cases);