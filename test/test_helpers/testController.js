const express = require('express');
const app = express();
const supertest = require('supertest');
const request = supertest(app);

module.exports = (done, cb) => {
   app.get('/test', (req, res) => {
    res.send('TEST');
  });

  request.get('/test').end((err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(res);
    }
    done();
  });
}
