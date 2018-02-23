const express = require('express');
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const getToken = require('../server/controllers/salesforce/auth.js');
const getTokenMock = require('../test/mocks/authMock.js');
const { findById } = require('../test/mocks/contactMock.js');
// describe('Index and Fallback Routes', () => {
//   let request;
//   let app;

//   beforeEach(() => {
//     app = express();
//     request = supertest(app);
//   });

//   it('Should get the index page', (done) => {
//     request.get('/').expect(200, (err, res) => {
//       expect(res.headers['content-type']).to.equal('text/html; charset=UTF-8');
//       done();
//     });
//   });

  // it('Should fallback to the index page for undefined routes', (done) => {
  //   request.get('/random').expect(200, (err, res) => {
  //     expect(res.headers['content-type']).to.equal('text/html; charset=UTF-8');
  //     done();
  //   })
  // });
//});

describe('Contact Routes', (done) => {
  let request;
  let getTokenSpy;
  let getContactStub;
  let contactRoute;

  beforeEach(() => {
    app = express();
    getTokenSpy = sinon.spy(getTokenMock);
    getContactStub = sinon.spy(findById);

    contactRoute = proxyquire('../server/routes/contactRoutes.js', {
      '../controllers/salesforce/auth.js': {
        getToken: getTokenSpy,
      },
      '../controllers/salesforce/contact.js': {
        findById: getContactStub
      }
    });

    contactRoute(app);
    request = supertest(app);
  });

  it('Should pass the request through authentication middleware', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(getTokenSpy.called).to.equal(true);
      done();
    });
  });

  it('Should pass the request to the contact controller', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(getContactStub.called).to.equal(true);
      done();
    });
  });

});