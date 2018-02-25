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

describe('Contact Controller Tests', () => {
  decribe('findByID Success Tests', () => {
    let axiosGETStub;
    let getToken;
    let nextStub;
    let nextSpy;
    let mockRequest;
    let mockResponse;
    let axiosGETErrStub;

    mockRequest = {};
    mockResponse = {send: sinon.spy()};

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

      axiosPostSpy = sinon.spy(axiosPostStub);
  })

  decribe('findByID Failure Tests', () => {

  })
});