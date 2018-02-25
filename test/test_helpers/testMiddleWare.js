const express = require('express');
const app = express();
const supertest = require('supertest');
const request = supertest(app);
const Promise = require('bluebird');

module.exports = (middleware, done) => {
  return new Promise((resolve, reject) => {
    app.get('/test', middleware, (req, res) => {
    resolve(req, res);
    res.end();
    });

    request.get('/test').end((err, res) => {
      done();
    });
  });
}
