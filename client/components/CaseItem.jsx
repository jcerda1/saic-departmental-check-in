import React from 'react';
import moment from 'moment';
import '../css/loading.gif';

const CaseItem = (props) => {
  //console.log(props)
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     editing: false,
  //     loading: false,
  //     status: '',
  //     caseId: this.props.supportCase.Id
  //   };

  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  //   this.handleSelect = this.handleSelect.bind(this);
  // }

  // handleSubmit(event) {
  //   this.setState({loading: true, editing: false});
  //   const {caseId, status} = this.state;
  //   this.props.handleUpdate(status, caseId)
  //   .then(() => {
  //     this.props.refreshList()
  //     .then((data) => {
  //       this.setState({loading: false});
  //     });
  //   });
  // };

  // handleClick() {
  //   this.setState({editing: true});
  // }

  // handleSelect(event) {
  //   this.setState({status: event.target.value})
  // }


    const { CaseNumber, Subject, CreatedDate, Status, Id } = props;
    const date = moment(CreatedDate).format('MMMM Do YYYY, h:mm a');

    return (
      <tr className="case-line">
        <td>{CaseNumber}</td>
        <td>
          <div>{Subject}</div>
        </td>
        <td>
          {props.loading ?
            <div className="flex-row">
              <img src="assets/loading.gif"
                 alt="Loading"
                 height="30"
              />
            </div>
            :
            props.Id === props.caseId ?
            <div className="flex-row">
              <select onChange={props.selectedCaseActions.handleSelect}>
                <option value="select" defaultValue>select</option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Void">Void</option>
              </select>
              <div className="btn submit" onClick={props.selectedCaseActions.updateCaseStatus}>Submit</div>
            </div>
            :
            <div className="flex-row status">{Status}
              <div className="btn update" onClick={() => props.selectedCaseActions.handleUpdateClick(Id)}>update</div>
            </div>
          }
        </td>
        <td>{date}</td>
      </tr>
    );
};

export default CaseItem;