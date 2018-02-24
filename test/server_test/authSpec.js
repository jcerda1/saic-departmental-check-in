const express = require('express');
const axios = require('axios');
const sinon = require('sinon');
const supertest = require('supertest');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire');
const expect = chai.expect;

chai.use(sinonChai);

describe('Saleforce Auth Controller Tests', (url, body, params) => {
  let axiosPostStub;

  beforeEach(() => {
    axiosPostSpy = sinon.spy();
  });

  afterEach(function () {

  })

  it('Should make an POST request with axios to the Salesforce auth server', (done) => {

  })
});