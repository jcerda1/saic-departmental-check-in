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
  let nextSpy;
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {send: sinon.spy()};
    axiosPostSpy = sinon.spy();
    nextSpy = sinon.spy();
    getToken = proxyquire('../../server/controllers/salesforce/auth.js', {
      axios: {
        post: () => {
          return new Promise((resolve, reject) => {
            resolve()
          });
        }
      }
    }).getToken;
  });

  it('Should make a POST request with axios to the Salesforce auth server', (done) => {
    getToken()
    done();
  })
});