import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as caseActions from '../src/actions/caseActions.js';

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
)(CaseList);