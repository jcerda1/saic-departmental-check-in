import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import NewCase from './NewCase.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: ''
    };
    this.createNewCase = this.createNewCase.bind(this);
  }

  createNewCase(subject) {
    console.log('creating case with subject: ', subject)
  }

  render() {
    return (
      <div className="account">
        <div className="flex-container title user-info">
          <div className="username">{this.props.user.Name}</div>
            <table>
             <tbody>
                <tr>
                  <td>email: {this.props.user.Email}</td>
                  <td>ID Number: {this.props.user.EMPLIDPeoplesoftKey__c}</td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
        </div>
        <NewCase handleClick={this.createNewCase}/>
        <div className="flex-container case-list"></div>
      </div>
    )
  }
}

export default App;
