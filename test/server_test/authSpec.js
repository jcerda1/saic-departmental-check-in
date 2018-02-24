const express = require('express');
const axios = require('axios');
const sinon = require('sinon');
const supertest = require('supertest');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
const { getToken } = require('../../server/controllers/salesforce/auth.js');

chai.use(sinonChai);

describe('Saleforce Auth Controller Tests', () => {

  beforeEach(() => {

  });

  afterEach(function () {

  })

  it('Should take request and response', (done) => {
    axios.post(`https://test.salesforce.com/services/oauth2/token`, {}, {
      params: { //Salesforce sandbox creds
        grant_type: 'password',
        client_id: 'TEST',
        client_secret: 'TEST',
        username: 'TEST',
        password: 'TEST'
      }
    })
  .then((res) => {
     done();
  })
  .catch(err => {
    console.log(err);
     done();
  });


  })
});