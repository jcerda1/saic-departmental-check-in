const express = require('express');
const app = express();
const supertest = require('supertest');
const request = supertest(app);

module.exports = (middleware, done, cb) => {
   app.get('/test', middleware, (req, res) => {
    cb(req, res);
    res.send('TEST');
  });

  request.get('/test').expect(200, (err, res) => {
    done();
  });
}
