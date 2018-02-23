const express = require('express');
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const getToken = require('../server/controllers/salesforce/auth.js');
const getTokenMock = require('../test/mocks/authMock.js');
const { findById } = require('../test/mocks/contactMock.js');
const fallbackRouter = require('../server/routes/fallbackRoutes.js');

describe('Index and Fallback Routes', () => {
  let request;
  let app;

  beforeEach(() => {
    app = express();
    request = supertest(app);
    fallbackRouter(app);
  });

  it('Should get the index page', (done) => {
    request.get('/').expect(200, (err, res) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=UTF-8');
      done();
    });
  });

  it('Should fallback to the index page for undefined routes', (done) => {
    request.get('/random').expect(200, (err, res) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=UTF-8');
      done();
    })
  });
});

describe('Contact Routes', (done) => {
  let request;
  let getTokenStub;
  let getContactStub;
  let contactRoute;

  beforeEach(() => {
    app = express();
    getTokenStub = sinon.spy(getTokenMock);
    getContactStub = sinon.spy(findById);

    contactRoute = proxyquire('../server/routes/contactRoutes.js', {
      '../controllers/salesforce/auth.js': {
        getToken: getTokenStub,
      },
      '../controllers/salesforce/contact.js': {
        findById: getContactStub
      }
    });

    contactRoute(app);
    request = supertest(app);
  });

  it('Should pass A GET request through authentication middleware', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(getTokenStub.called).to.equal(true);
      done();
    });
  });

  it('Should pass A GET request to the contact controller', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(getContactStub.called).to.equal(true);
      done();
    });
  });

  it('Should respond to A GET request with JSON User data', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
      expect(res.body).to.deep.equal({
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
      done();
    });
  });
});

describe('Case Routes', (done) => {
  let request;
  let getTokenStub;
  let findByIdStub;
  let caseRoute;

  beforeEach(() => {
    app = express();
    getTokenStub = sinon.spy(getTokenMock);

    caseRoute = proxyquire('../server/routes/caseRoutes.js', {
      '../controllers/salesforce/auth.js': {
        getToken: getTokenStub,
      }
    });

    caseRoute(app);
    request = supertest(app);
  });

  it('Should pass a GET request through authentication middleware', (done) => {
    request.get('/cases').expect(200, (err, res) => {
      expect(getTokenStub.called).to.equal(true);
      done();
    });
  });

});