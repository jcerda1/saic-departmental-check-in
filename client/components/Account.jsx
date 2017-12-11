import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import NewCase from './NewCase.jsx';
import CaseList from './CaseList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: ''
    };
    this.createNewCase = this.createNewCase.bind(this);
    this.getCases = this.getCases.bind(this);
  }

  componentDidMount() {
    this.getCases();
  }

  createNewCase(subject) {
    console.log('creating case with subject: ', subject)
    axios.post('/cases', {
      params : {
        id: this.props.user.EMPLIDPeoplesoftKey__c
      }
    });
  }

  getCases() {
    axios.get('/cases', {
      params: {
        id: this.props.user.Id
      }
    });
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
        <CaseList getCases={this.props.getCases}/>
      </div>
    )
  }
}

export default App;
