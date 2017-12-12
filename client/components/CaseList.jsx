import React from 'react';
import CaseItem from './CaseItem.jsx';

const CaseList = (props) => {
  return (
    <div className="flex-container case-list">
      <div className="form-title">Cases</div>
      <table>
        <tbody>
          <tr>
            <th>Case#</th>
            <th className="subject-column">Subject</th>
            <th>Status</th>
            <th>Date Created</th>
          </tr>
          {props.cases.map((supportCase, i)=> {
            return <CaseItem
                    supportCase={supportCase}
                    key={i}
                    handleUpdate={props.handleUpdate}
                  />
          })
        }
          </tbody>
      </table>
    </div>
  );
}

export default CaseList;