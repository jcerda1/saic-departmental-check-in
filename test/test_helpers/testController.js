const express = require('express');
const app = express();
const supertest = require('supertest');
const request = supertest(app);

module.exports = (controller, done, cb) => {
   app.get('/test', controller);

  request.get('/test').end((err, res) => {
    done();
    if (err) {
      cb(err);
    } else {
      cb(res);
    }

  });
}
