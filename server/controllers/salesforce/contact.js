const axios = require('axios');

exports.findById = (req, res) => {
  if (!req.query.id) {
    res.status(401).send('No ID number provided');
  } else {
    const url = `https://saic--HDBox.cs3.my.salesforce.com/services/data/v20.0/query?q=`;

    //add fields here
    const fields = ['name', 'email', 'EMPLIDPeoplesoftKey__c', 'ID'].join(',');
    const id = req.query.id;
    const query = `SELECT ${fields} from Contact WHERE EMPLIDPeoplesoftKey__c = '${id}'`;

    axios.get(url + query, {
      headers: {
        Authorization: 'Bearer ' + req.access_token
      }
    })
    .then(data => {
      res.send(data.data);
    })
    .catch(err => {
      res.send(err.response.data);
    })
  }
}