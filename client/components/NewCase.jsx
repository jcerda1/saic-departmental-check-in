import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';

class NewCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({subject: event.target.value});
  }

  handleClick(event) {
    this.props.handleClick(this.state.subject);
    this.setState({subject: ''});
  }

  render() {
    return (
      <div className="flex-container new-case">
        <div className="form-title">New Case</div>
        <div className="flex-row">
          <div>Subject:</div>
          <div>
            <input
              className="case-subject"
              name="case-subject"
              type="text"
              value={this.state.subject}
              onChange={this.handleInput}
            />
          </div>
          <div className="btn" onClick={this.handleClick}>Create Case</div>
        </div>
      </div>
    );
  }
}

export default NewCase;