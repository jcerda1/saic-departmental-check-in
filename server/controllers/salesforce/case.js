const axios = require('axios');

exports.findByContactId = (req, res) => {
  const url = `https://saic--HDBox.cs3.my.salesforce.com/services/data/v20.0/query?q=`;
  const fields = [//add fields here
                    'subject'
                  ].join(',');

  const id = req.param('id');
  const query = `SELECT ${fields} from Case WHERE ContactId = '${id}'`;

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