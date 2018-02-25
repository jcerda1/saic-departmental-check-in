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
          resolve({ data: 'TEST CONTACT DATA'});
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

    it('Should make an axios GET request', (done) => {
      request.get('/test').query({ id: 0000000}).end((err, res) => {
        expect(axiosGETSpy).to.have.been.called;
        done();
      });
    })

    it('Should add an authorization header to the axios GET request', (done) => {
      request.get('/test').query({ id: 0000000}).expect(200, (err, res) => {
        const headers = axiosGETSpy.args[0][1].headers;
        expect(headers).to.have.keys('Authorization');
        done();
      });
    })

    it('Should send the contact data in the response', (done) => {
      request.get('/test').query({ id: 0000000}).expect(200, (err, res) => {
        const expectedResponse = 'TEST CONTACT DATA';
        const actualResponse = res.text;
        expect(actualResponse).to.equal(expectedResponse);
        done();
      });
    })


  })

  describe('findByID Failure Tests', () => {
    let axiosGETErrStub;
    let findById;
    let request;
    let app

    beforeEach(() => {
      axiosGETErrStub = (url, body, params) => {
        return new Promise((resolve, reject) => {
          reject({response: {data: 'TEST ERROR'}});
        });
      }

      findById = proxyquire('../../server/controllers/salesforce/contact.js', {
        axios: {
          get: axiosGETErrStub
        }
      }).findById;
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