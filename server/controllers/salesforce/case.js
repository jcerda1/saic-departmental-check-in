const axios = require('axios');

exports.findByContactId = (req, res) => {
  const url = `https://saic--HDBox.cs3.my.salesforce.com/services/data/v20.0/query?q=`;

  //add fields here
  const fields = ['Subject', 'CaseNumber', 'CreatedDate', 'Id', 'Status'].join(',');

  const id = req.query.id;
  const query = `SELECT ${fields} FROM Case WHERE ContactId = '${id}'ORDER BY CreatedDate DESC LIMIT 5`;

  axios.get(url + query, {
    headers: {
      Authorization: 'Bearer ' + req.access_token
    }
  })
  .then(data => {
    res.send(data.data);
  })
  .catch(err => {
    res.status(400).send(err.response.data);
  })
};

exports.createNew = (req, res) => {
  const url = `https://saic--HDBox.cs3.my.salesforce.com/services/data/v20.0/sobjects/Case/`;

  const caseData = {
    Subject: req.body.subject,
    ContactId: req.body.id,
    Origin: 'Help Desk Walk In SP401',
    RecordTypeId: '0121a000000UieFAAS',
    OwnerId: '0051a0000013SXcAAM',
    Walk_In__c: true,
    Type: 'Tech Support',
    Sub_Type2__c: 'Software & Online Services',
    Category3__c: 'macOS',
    Issue4__c: 'Other Issue',
    Status: 'New',
    isTestCase__c: true,
    Receive_Email_For_This_Case__c: false
  }

  axios.post(url, caseData, {
    headers: {
      Authorization: 'Bearer ' + req.access_token
    }
  })
  .then(data => {
    res.send(data.data);
  })
  .catch(err => {
    res.send(err);
  })
};

exports.updateStatus = (req, res) => {
  const url = `https://saic--HDBox.cs3.my.salesforce.com/services/data/v20.0/sobjects/Case/${req.body.id}`;

  axios.patch(url, {Status: req.body.status}, {
    headers: {
      Authorization: 'Bearer ' + req.access_token
    }
  })
  .then(data => {
    res.send(data.data);
  })
  .catch(err => {
    console.log('ERROR')
    console.log(err)
    res.send(err);
  })
};