const express = require('express');
const app = express();
const supertest = require('supertest');
const request = supertest(app);

module.exports = (controller, done, cb) => {
   app.get('/test', controller, (req, res) => {
    res.send('TEST');
  });

  request.get('/test').end((err, res) => {
    if (err) {
      console.log('test error')
      cb(err);
    } else {
      console.log('SUCCESS', res.body)
      cb(null, res);
    }
  });
}
