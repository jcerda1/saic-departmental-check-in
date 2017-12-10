const axios = require('axios');
const Promise = require ('bluebird');
const {CLIENT_ID, CLIENT_SECRET, USERNAME, PASSWORD, API_USER_TOKEN} = process.env;

exports.getToken = (req, res, next) => {
    return axios.post(`https://test.salesforce.com/services/oauth2/token`, {}, {
      params : { //Salesforce sandbox creds
        grant_type: 'password',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: USERNAME,
        password: PASSWORD + API_USER_TOKEN
      }
    })
    .then((data) => {
      console.log(data.data.access_token);
      req.access_token = data.data.access_token;
      next();
    })
    .catch(err => {
      res.send(err.response.data);
    });

}


