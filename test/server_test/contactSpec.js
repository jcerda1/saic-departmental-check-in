const express = require('express');
const axios = require('axios');
const sinon = require('sinon');
const supertest = require('supertest');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire');
const Promise = require('bluebird');
const expect = chai.expect;
const testController = require('../test_helpers/testController.js');

chai.use(sinonChai);

describe('Contact Controller Tests', () => {

  describe('findByID Success Tests', () => {
    let axiosGETStub;
    let axiosGETSpy;
    let findById;

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

      it('makes an axios GET request', (done) => {
        done();
      });
  })

  describe('findByID Failure Tests', () => {

  })
});