import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';

const CaseList = (props) => {
  console.log()
  return (
    <div className="flex-container">
      <div>Cases</div>
      <table>
        <tbody>
          <tr>
            <th>Case #</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
          {props.cases.forEach(supportCase => {
            return <tr>TEST</tr>
          })
        }
          </tbody>
      </table>
    </div>
  );
}

export default CaseList;