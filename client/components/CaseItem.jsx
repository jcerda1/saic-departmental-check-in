import React from 'react';
import moment from 'moment';
import '../css/loading.gif';

const CaseItem = (props) => {
  const { CaseNumber, Subject, CreatedDate, Status, Id} = props;
  const { updateCaseStatus, handleSelect, handleUpdateClick } = props.selectedCaseActions;
  const isSelected = props.Id === props.caseId;
  const date = moment(CreatedDate).format('MMMM Do YYYY, h:mm a');

  return (
    <tr className="case-line">
      <td>{CaseNumber}</td>
      <td>
        <div>{Subject}</div>
      </td>
      <td>
        {props.loading && isSelected ?
          <div className="flex-row">
            <img src="assets/loading.gif"
               alt="Loading"
               height="30"
            />
          </div>
          :
          isSelected ?
          <div className="flex-row">
            <select onChange={handleSelect}>
              <option value="select" defaultValue>select</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Void">Void</option>
            </select>
            <div className="btn submit" onClick={updateCaseStatus}>Submit</div>
          </div>
          :
          <div className="flex-row status">{Status}
            <div className="btn update" onClick={() => handleUpdateClick(Id)}>update</div>
          </div>
        }
      </td>
      <td>{date}</td>
    </tr>
  );
};

export default CaseItem;