const express = require('express');
const axios = require('axios');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire');
const Promise = require('bluebird');
const expect = chai.expect;
const supertest = require('supertest');
const testController = require('../test_helpers/testController.js');

chai.use(sinonChai);

describe('Contact Controller Tests', () => {

  describe('findByID Success Tests', () => {
    let axiosGETStub;
    let axiosGETSpy;
    let findById;
    let request;
    let app;

    beforeEach(() => {
      axiosGETStub = (url, body, params) => {
        return new Promise((resolve, reject) => {
          resolve({
              "totalSize": 1,
              "done": true,
              "records": [
                  {
                      "attributes": {
                          "type": "Contact",
                          "url": "/services/data/v20.0/sobjects/Contact/003Q000001ASf1aIAD"
                      },
                      "Name": "Nicholas Havens",
                      "Email": "nhaven@saic.edu",
                      "EMPLIDPeoplesoftKey__c": "7000428",
                      "Id": "003Q000001ASf1aIAD"
                  }
              ]
          });
        });
      }

      axiosGETSpy = sinon.spy(axiosGETStub);

      findById = proxyquire('../../server/controllers/salesforce/contact.js', {
        axios: {
          get: axiosGETSpy
        }
      }).findById;

      app = express();
      request = supertest(app);

      app.get('/test', findById);
    });

  })

  describe('findByID Failure Tests', () => {
    let findById;
    let request;
    let app

    beforeEach(() => {
      findById = require('../../server/controllers/salesforce/contact.js').findById;

      app = express();
      request = supertest(app);

      app.get('/test', findById);
    });

    it('Should respond with an error if no ID parameter is present on request', (done) => {
        request.get('/test').expect(401, done);
      });
  })
});