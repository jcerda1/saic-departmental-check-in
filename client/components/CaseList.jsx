import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';

const CaseList = (props) => {
  console.log()
  return (
    <div className="flex-container case-list">
      <div className="form-title">Cases</div>
      <table>
        <tbody>
          <tr>
            <th>Case #</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
          {props.cases.map((supportCase, i)=> {
            return (
              <tr key={i}>
                <td>{supportCase.CaseNumber}</td>
                <td>{supportCase.Subject}</td>
                <td>{supportCase.CreatedDate}</td>
              </tr>
            )
          })
        }
          </tbody>
      </table>
    </div>
  );
}

export default CaseList;