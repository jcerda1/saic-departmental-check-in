const express = require('express');
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const supertest = require('supertest');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
const getToken = require('../server/controllers/salesforce/auth.js');
const getTokenMock = require('../test/mocks/authMock.js');
const controllerMock = require('../test/mocks/controllerMock.js');
const fallbackRouter = require('../server/routes/fallbackRoutes.js');

chai.use(sinonChai);

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
    getContactStub = sinon.spy(controllerMock);

    contactRoute = proxyquire('../server/routes/contactRoutes.js', {
      '../controllers/salesforce/auth.js': {
        getToken: getTokenStub
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
      expect(getTokenStub).to.have.been.called;
      done();
    });
  });

  it('Should pass A GET request to the findById method on contact controller', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(getContactStub).to.have.been.called;
      done();
    });
  });

  it('Should respond to A GET request with JSON data', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
      done();
    });
  });
});

describe('Case Routes', (done) => {
  let request;
  let getTokenStub;
  let caseRoute;
  let getCaseByIdStub;
  let creatNewCaseStub;
  let updateStatusStub;

  beforeEach(() => {
    app = express();
    getTokenStub = sinon.spy(getTokenMock);
    getCaseByIdStub = sinon.spy(controllerMock);
    creatNewCaseStub = sinon.spy(controllerMock);
    updateStatusStub = sinon.spy(controllerMock);

    caseRoute = proxyquire('../server/routes/caseRoutes.js', {
      '../controllers/salesforce/auth.js': {
          getToken: getTokenStub
        }, '../controllers/salesforce/case.js': {
          findByContactId: getCaseByIdStub,
          createNew: creatNewCaseStub,
          updateStatus: updateStatusStub
        }
    });

    caseRoute(app);
    request = supertest(app);
  });

  it('Should pass a GET request through authentication middleware', (done) => {
    request.get('/cases').expect(200, (err, res) => {
      expect(getTokenStub).to.have.been.called;
      done();
    });
  });

  it('Should pass a GET request to the findByContactId method on case controller', (done) => {
    request.get('/cases').expect(200, (err, res) => {
      expect(getCaseByIdStub).to.have.been.called;
      done();
    });
  });

  it('Should respond to A GET request with JSON data', (done) => {
    request.get('/cases').expect(200, (err, res) => {
      expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
      done();
    });
  });

});