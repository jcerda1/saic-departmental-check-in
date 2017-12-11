const axios = require('axios');

exports.findByContactId = (req, res) => {
  const url = `https://saic--HDBox.cs3.my.salesforce.com/services/data/v20.0/query?q=`;
  const fields = [//add fields here
                    'subject',
                    'caseNumber',
                    'CreatedDate'
                  ].join(',');

  const id = req.param('id');
  const query = `SELECT ${fields} from Case WHERE ContactId = '${id}' ORDER BY CreatedDate DESC LIMIT 10`;

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
};

exports.createNew = (req, res) => {
  const url = `https://saic--HDBox.cs3.my.salesforce.com/services/data/v20.0/sobjects/Case`;

  const caseData = {
    Subject: req.param('subject'),
    ContactId: req.param('id'),
    Origin: 'Help Desk Walk In SP401',
    RecordTypeId: '0121a000000UieFAAS',
    OwnerId: '0051a0000013SXcAAM',
    Walk_In__c: true,
    Type: 'Tech Support',
    Sub_Type2__c: 'Software & Online Services',
    Category3__c: 'macOS',
    Issue4__c: 'Other Issue',
    Status: 'New',
    isTestCase__c: true
  }

  axios.post(url, caseData, {
    headers: {
      Authorization: 'Bearer ' + req.access_token
    }
  })
};