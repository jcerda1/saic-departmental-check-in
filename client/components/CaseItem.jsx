import React from 'react';
import moment from 'moment';
import '../css/loading.gif';

class CaseItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      loading: false,
      status: '',
      caseId: this.props.supportCase.Id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSubmit(event) {
    this.setState({loading: true, editing: false});
    const {caseId, status} = this.state;
    this.props.handleUpdate(status, caseId)
    .then(() => {
      this.props.refreshList()
      .then((data) => {
        this.setState({loading: false});
      });
    });
  };

  handleClick() {
    this.setState({editing: true});
  }

  handleSelect(event) {
    this.setState({status: event.target.value})
  }

  render () {
    const {CaseNumber, Subject, CreatedDate, Status} = this.props.supportCase;
    const date = moment(CreatedDate).format('MMMM Do YYYY, h:mm a');

    return (
      <tr className="case-line">
        <td>{CaseNumber}</td>
        <td>
          <div>{Subject}</div>
        </td>
        <td>
          {this.state.loading ?
            <div className="flex-row">
              <img src="assets/loading.gif"
                 alt="Loading"
                 height="30"
              />
            </div>
            :
            this.state.editing ?
            <div className="flex-row">
              <select onChange={this.handleSelect}>
                <option value="select" defaultValue>select</option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Void">Void</option>
              </select>
              <div className="btn submit" onClick={this.handleSubmit}>Submit</div>
            </div>
            :
            <div className="flex-row status">{Status}
              <div className="btn update" onClick={this.handleClick}>update</div>
            </div>
          }
        </td>
        <td>{date}</td>
      </tr>
    );
  }
}

export default CaseItem;