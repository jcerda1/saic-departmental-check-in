import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as caseActions from '../src/actions/caseActions.js';
import CaseItem from '../components/CaseItem.jsx';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
      caseActions: bindActionCreators(caseActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CaseItem);