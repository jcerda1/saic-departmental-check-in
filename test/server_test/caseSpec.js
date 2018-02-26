const express = require('express');
const axios = require('axios');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire');
const Promise = require('bluebird');
const expect = chai.expect;
const supertest = require('supertest');

chai.use(sinonChai);

describe('Case Controller Tests', () => {
  describe('findByContactId Success Tests', () => {
    let axiosGetStub;
    let axiosGetSpy;
    let findById;
    let request;
    let app;

    beforeEach(() => {
      axiosGetStub = (url, body, params) => {
        return new Promise((resolve, reject) => {
          resolve({ data: 'TEST CASE DATA'});
        });
      }

      axiosGetSpy = sinon.spy(axiosGetStub);

      findByContactId = proxyquire('../../server/controllers/salesforce/case.js', {
        axios: {
          get: axiosGetSpy
        }
      }).findByContactId;

      app = express();
      request = supertest(app);

      app.get('/test', findById);
    });
  });
});