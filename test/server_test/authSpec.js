const express = require('express');
const axios = require('axios');
const sinon = require('sinon');
const supertest = require('supertest');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire');
const Promise = require('bluebird');
const expect = chai.expect;

chai.use(sinonChai);

describe('Saleforce Auth Controller Tests', (url, body, params) => {
  let axiosPostStub;
  let getToken;
  let nextStub;
  let nextSpy;
  let mockRequest;
  let mockResponse;
  let testMiddleWare;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {send: sinon.spy()};


    testMiddleWare = (middleware, done) => {
      return new Promise((resolve, reject) => {
        const app = express();
        const request = supertest(app);

        app.get('/test', middleware, (req, res) => {
          resolve(req, res);
        });

        request.get('/test').expect(200, (err, res) => {
          if (err) {
            reject(err);
          }
          done();
        });
      });
    };

    axiosPostStub = (url, body, params) => {
          return new Promise((resolve, reject) => {
            resolve({data: {access_token: '00DQ000000GKkqu!AQsAQAxMs'}});
          });
        }

    axiosPostSpy = sinon.spy(axiosPostStub);

    nextSpy = sinon.spy();

    getToken = proxyquire('../../server/controllers/salesforce/auth.js', {
      axios: {
        post: axiosPostSpy
      }
    }).getToken;
  });

  it('Should make a POST request with axios to the Salesforce auth server', (done) => {
    getToken(mockRequest, mockResponse, nextSpy);
    expect(axiosPostSpy).to.have.been.calledWith(`https://test.salesforce.com/services/oauth2/token`);
    done();
  });

  it('Should contain all Salesforce auth params', (done) => {
    getToken(mockRequest, mockResponse, nextSpy);
    const params = axiosPostSpy.args[0][2].params;
    expect(params).to.have.keys('grant_type', 'client_id', 'client_secret', 'username', 'password');
    done()
  });

  it(`Should have a grant_type of 'password'`, (done) => {
    getToken(mockRequest, mockResponse, nextSpy);
    const params = axiosPostSpy.args[0][2].params;
    expect(params.grant_type).to.equal('password');
    done()
  });

  it(`Should send error data`, (done) => {
    getToken(mockRequest, mockResponse, nextSpy);
    testMiddleWare(getToken, done)
    //expect(mockResponse.send).to.have.been.called;
  });


});