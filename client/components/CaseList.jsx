import React from 'react';
import Case from '../containers/Case.js';

const CaseList = (props) => {
  return (
    <div className="flex-container case-list">
      <div className="form-title line username">Cases</div>
      {!props.cases ? <div className="flex-container">Getting Cases...</div>
      :
      <table className="case-table">
        <tbody>
          <tr>
            <th>Case#</th>
            <th className="subject-column">Subject</th>
            <th>Status</th>
            <th>Date Created</th>
          </tr>
          {props.cases.map((caseData, i) => <Case {...caseData} key={i}/>)}
          </tbody>
      </table>

      }

    </div>
  );
}

export default CaseList;