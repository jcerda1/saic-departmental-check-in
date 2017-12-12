import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import '../css/loading.gif';

class NewCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      updating: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({subject: event.target.value});
  }

  handleClick(event) {
    this.setState({updating: true})
    this.props.handleClick(this.state.subject)
    .then((data) => {
       this.setState({subject: '', updating: false});
    });

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
          {this.state.updating ?
            <img src="assets/loading.gif"
               alt="Image not found"
               height="100"
            />
            :
            <div className="btn" onClick={this.handleClick}>Create Case</div>
          }

        </div>
      </div>
    );
  }
}

export default NewCase;