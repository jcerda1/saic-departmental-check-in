import React from 'react';
import moment from 'moment';

class CaseItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(event) {
    this.props.handleUpdate(event.target.value, this.props.supportCase.Id);
    event.target.value = 'select'
  };

  render () {
    const {CaseNumber, Subject, CreatedDate, Status} = this.props.supportCase;
    const date = moment(CreatedDate).format('MMMM Do YYYY, h:mm a');

    return (
      <tr>
        <td>{CaseNumber}</td>
        <td>
          <div>{Subject}</div>
        </td>
        <td>
          <div>{Status}</div>
          <div>
            <select onChange={this.handleUpdate}>
              <option value="select" defaultValue>select</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
              <option value="Void">Void</option>
            </select>
          </div>
        </td>
        <td>{date}</td>
      </tr>
    );
  }
}

export default CaseItem;