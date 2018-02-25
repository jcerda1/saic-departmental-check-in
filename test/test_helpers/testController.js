const express = require('express');
const app = express();
const supertest = require('supertest');
const request = supertest(app);
const Promise = require('bluebird');

module.exports = (controller) => {
  return new Promise((resolve, reject) => {
  app.get('/test', controller);

  request.get('/test').end((err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
    }
  });
  })
}
