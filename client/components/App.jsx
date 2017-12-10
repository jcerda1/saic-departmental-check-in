import React from 'react';
import axios from 'axios';
import Promise from 'bluebird';
import { BrowserRouter, Route, Link, browserHistory } from 'react-router-dom';
import '../css/styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
    console.log(idNum)
    axios.get('/contact', {
      params: {id: idNum}
    })
    .then(data => {
      console.log(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
      <form>
        <input
          name="idNum"
          type="text"
          onChange={this.handleInput}
        />
      </form>
      </div>
    )
  }
}

export default App;
