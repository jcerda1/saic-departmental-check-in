const axios = require('axios');

exports.findById = (req, res) => {
  const url = `https://saic--HDBox.cs3.my.salesforce.com/services/data/v20.0/query?q=`;
  const fields = [//add fields here
                    'name',
                    'email',
                    'EMPLIDPeoplesoftKey__c'
                  ].join(',');

  const id = req.param('id');
  const query = `SELECT ${fields} from Contact WHERE EMPLIDPeoplesoftKey__c = '${id}'`;

  axios.get(url + query, {
    headers: {
      Authorization: 'Bearer ' + req.access_token
    }
  })
  .then(data => {
    console.log(data.data);
    res.send(data.data);
  })
  .catch(err => {
    console.log(err.response.data);
    res.send(err.response.data);
  })
}