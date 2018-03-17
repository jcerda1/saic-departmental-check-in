import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CaseItem from '../components/CaseItem.jsx';

const Case = (props) => {
  return <CaseItem caseData={props.caseData}/>;
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(
    null,
    mapDispatchToProps
)(Case);