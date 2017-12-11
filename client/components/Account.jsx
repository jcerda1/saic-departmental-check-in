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

  componentWillMount() {
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
    })
    .then(data => {
      console.log(data.data.records)
      this.setState({cases: data.data.records})
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="account">
        <div className="flex-container title user-info">
          <div className="username">{this.props.user.Name}</div>
          <img
            src={`https://information.artic.edu/pspics/${this.props.user.EMPLIDPeoplesoftKey__c}`}
            height="100"
          />
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
        {this.state.cases ? <CaseList cases={this.state.cases}/> : <div className="flex-container">Loading Cases</div>}
      </div>
    )
  }
}

export default App;
