import React from 'react';
import moment from 'moment';

const CaseItem = (props) => {
  const {CaseNumber, Subject, CreatedDate} = props.supportCase;
  const date = moment(CreatedDate).format('MMMM Do YYYY, h:mm:ss a');

  return (
    <tr>
      <td>{CaseNumber}</td>
      <td>{Subject}</td>
      <td>{date}</td>
    </tr>
  );
}

export default CaseItem;