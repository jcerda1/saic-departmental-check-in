import React from 'react';
import moment from 'moment';

class CaseItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     updating: false,
     newSubject: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick() {
    this.setState({updating: true});
  }

  handleInput(event) {
    this.setState({newSubject: event.target.value});
  }

  render () {
    const {CaseNumber, Subject, CreatedDate} = this.props.supportCase;
    const date = moment(CreatedDate).format('MMMM Do YYYY, h:mm a');

    return (
      <tr>
        <td>{CaseNumber}</td>
        <td>
          {this.state.updating ?
            <div className="subject">
              <input
                type="text"
                value={this.state.newSubject}
                name="new-subject"
              />
              <div
                className="btn update"
                name="new-subject"
              >Submit</div>
            </div>
            :
            <div className="subject">
            <div>{Subject}</div>
            <div
              className="btn update"
              onClick={this.handleClick}
            >Update</div>
            </div>
          }
        </td>
        <td>{date}</td>
      </tr>
    );
  }
}

export default CaseItem;