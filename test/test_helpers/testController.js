const express = require('express');
const app = express();
const supertest = require('supertest');
const request = supertest(app);

module.exports = (controller, cb) => {
  app.get('/test', controller);

  request.get('/test').end((err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
}
