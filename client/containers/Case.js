import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CaseItem from '../components/CaseItem.jsx';
import * as selectedCaseActions from '../src/actions/selectedCaseActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    selectedCaseActions: bindActionCreators(selectedCaseActions, dispatch)
  };
};

export default connect(
    null,
    mapDispatchToProps
)(CaseItem);