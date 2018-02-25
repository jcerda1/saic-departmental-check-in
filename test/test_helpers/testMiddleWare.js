const express = require('express');
const app = express();
const supertest = require('supertest');
const request = supertest(app);
const Promise = require('bluebird');

module.exports = (middleware) => {
  return new Promise((resolve, reject) => {
    app.get('/test', middleware, (req, res) => {
    resolve(req, res);
    res.send('TEST');
    });

    request.get('/test').end((err, res) => {
      res.end();
    });
  });
}
