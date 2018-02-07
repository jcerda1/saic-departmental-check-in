import React from 'react';
import axios from 'axios';
import '../css/styles.css';
import Account from './Account.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userObj: null
    };
    this.getContact = this.getContact.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const idNum = event.target.value;
    if (idNum.length === 7) {
      this.getContact(idNum);
    }
  }

  getContact(idNum) {
    axios.get('/contact', {
      params: {id: idNum}
    })
    .then(data => {
      this.setState({userObj: data.data.records[0]});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      this.state.userObj ?
        <Account user={this.state.userObj}/>
      :
      <div className="main">

        <div className="flex-container title">Please scan your ID</div>
        <div className="flex-container fa fa-id-card"></div>
        <div className="flex-container text-input">
          <form >
            <input
              name="idNum"
              type="text"
              onChange={this.handleInput}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
