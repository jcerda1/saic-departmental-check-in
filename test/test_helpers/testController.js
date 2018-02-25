const express = require('express');
const app = express();
const supertest = require('supertest');
const Promise = require('bluebird');

module.exports = (controller, params = {}) => {
  return new Promise((resolve, reject) => {
  app.get('/test', controller);

  const request = supertest(app);

  request.get('/test').then((res) => {
      resolve(res);
    });
  })
}
