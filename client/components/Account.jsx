import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import NewCase from './NewCase.jsx';
import CaseList from './CaseList.jsx';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: ''
    };
    this.createNewCase = this.createNewCase.bind(this);
    this.getCases = this.getCases.bind(this);
    this.updateCaseStatus = this.updateCaseStatus.bind(this);
  }

  componentWillMount() {
    this.getCases();
  }

  createNewCase(subject) {
    return new Promise((resolve, reject) => {
      console.log('creating case with subject: ', subject, this.props.user.Id)
      axios.post('/cases', {
        id: this.props.user.Id,
        subject: subject
      })
      .then(data => {
        this.getCases()
        .then((data) => resolve(data));
      })
      .catch(err => {
        console.log(err);
        reject(err);
      })
    });
  }

  getCases() {
    return new Promise((resolve, reject) => {
      axios.get('/cases', {
        params: {
          id: this.props.user.Id
        }
      })
      .then(data => {
        this.setState({cases: data.data.records});
        resolve(data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
    });
  }

  updateCaseStatus(status, caseId) {
    return new Promise((resolve, reject) => {
      axios.put('/cases', {
      status: status,
      id: caseId
      })
      .then(() => {
        console.log("successfully updated");
        resolve();
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
    });
  }

  render() {
    return (
      <div className="account">
        <div className="flex-container title user-info">
          <div className="username line title">{this.props.user.Name}</div>
          <img
            src={`https://information.artic.edu/pspics/${this.props.user.EMPLIDPeoplesoftKey__c}`}
            height="125"
          />
          <table>
           <tbody>
              <tr>
                <td><b>email: </b>{this.props.user.Email}</td>
                <td><b>ID Number: </b>{this.props.user.EMPLIDPeoplesoftKey__c}</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
        <NewCase handleClick={this.createNewCase}/>
        {this.state.cases ? <CaseList
          cases={this.state.cases}
          refreshList={this.getCases}
          handleUpdate={this.updateCaseStatus}
        />
        :
        <div className="flex-container">Loading Cases</div>}
      </div>
    )
  }
}

export default Account;
