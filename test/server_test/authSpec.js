const express = require('express');
const axios = require('axios');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire');
const Promise = require('bluebird');
const testController = require('../test_helpers/testController.js');
const testMiddleWare = require('../test_helpers/testMiddleWare.js');
const expect = chai.expect;

chai.use(sinonChai);

describe('Saleforce Auth Controller Tests', () => {

  describe('Success Tests', () => {
    let axiosPostStub;
    let axiosPostSpy;
    let getToken;
    let axiosPostErrStub;

    beforeEach(() => {
      axiosPostStub = (url, body, params) => {
            return new Promise((resolve, reject) => {
              resolve({data: {access_token: '00DQ000000GKkqu!AQsAQAxMs'}});
            });
          }

      axiosPostSpy = sinon.spy(axiosPostStub);

      getToken = proxyquire('../../server/controllers/salesforce/auth.js', {
        axios: {
          post: axiosPostSpy
        }
      }).getToken;
    });

    it('Should make a POST request with axios to the Salesforce auth server', (done) => {
      testMiddleWare(getToken, done)
      .then((req, res) => {
        const url = `https://test.salesforce.com/services/oauth2/token`;
        expect(axiosPostSpy).to.have.been.calledWith(url);
      });
    });

    it('Should contain all Salesforce auth params', (done) => {
      testMiddleWare(getToken, done)
      .then((req, res) => {
        const expectedParams = [
          'grant_type',
          'client_id',
          'client_secret',
          'username',
          'password'
        ];

        const actualParams = axiosPostSpy.args[0][2].params;

        expect(actualParams).to.have.keys(expectedParams);
        done()
      });
    });

    it(`Should have a grant_type of 'password'`, (done) => {
      testMiddleWare(getToken, done)
      .then((req, res) => {
        const params = axiosPostSpy.args[0][2].params;
        expect(axiosPostSpy).to.have.been.calledWith(url);
        expect(params.grant_type).to.equal('password');
        done();
      });
    });

    it(`Should attach token to next request`, (done) => {
      testMiddleWare(getToken, done)
      .then((req, res) => {
        expect(req.access_token).to.equal('00DQ000000GKkqu!AQsAQAxMs');
        done();
      })
    });
  })

  describe('Failure Tests', () => {
    let axiosPostStub;
    let axiosPostSpy;
    let getToken;
    let axiosPostErrStub;

    beforeEach(() => {
      axiosPostErrStub = (url, body, params) => {
            return new Promise((resolve, reject) => {
              reject({response: {data: 'TEST ERROR'}});
            });
          }

      axiosPostSpy = sinon.spy(axiosPostErrStub);

      getToken = proxyquire('../../server/controllers/salesforce/auth.js', {
        axios: {
          post: axiosPostSpy
        }
      }).getToken;
    });


    it(`Should send error data`, (done) => {
      testController(getToken)
      .then(res => {
        expect(res.text).to.equal('TEST ERROR');
        done();
      });
    });
  })



});