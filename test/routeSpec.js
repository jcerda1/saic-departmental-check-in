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
    request.get('/')
    .expect('Content-Type', /html/)
    .expect(200, done);
  });

  it('Should fallback to the index page for undefined routes', (done) => {
    request.get('/random')
    .expect('Content-Type', /html/)
    .expect(200, done);
  })
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

  it('Should pass a GET request through auth middleware', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(getTokenStub).to.have.been.called;
      done();
    });
  });

  it('Should pass a GET request to the findById method on contact controller', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(getContactStub).to.have.been.called;
      done();
    });
  });

  it('Should respond to a GET request with JSON data', (done) => {
    request.get('/contact')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('Case Routes', (done) => {
  let request;
  let getTokenStub;
  let caseRoute;
  let getCaseByIdStub;
  let creatNewCaseStub;
  let updateCaseStub;

  beforeEach(() => {
    app = express();
    getTokenStub = sinon.spy(getTokenMock);
    getCaseByIdStub = sinon.spy(controllerMock);
    creatNewCaseStub = sinon.spy(controllerMock);
    updateCaseStub = sinon.spy(controllerMock);

    caseRoute = proxyquire('../server/routes/caseRoutes.js', {
      '../controllers/salesforce/auth.js': {
          getToken: getTokenStub
        }, '../controllers/salesforce/case.js': {
          findByContactId: getCaseByIdStub,
          createNew: creatNewCaseStub,
          updateStatus: updateCaseStub
        }
    });

    caseRoute(app);
    request = supertest(app);
  });

  it('Should pass a GET request through auth middleware', (done) => {
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

  it('Should respond to a GET request with JSON data', (done) => {
    request.get('/cases')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it('Should pass a POST request through auth middleware', (done) => {
    request.post('/cases').expect(200, (err, res) => {
      expect(getTokenStub).to.have.been.called;
      done();
    });
  });

  it('Should pass a POST request to the createNew method on case controller', (done) => {
    request.post('/cases').expect(200, (err, res) => {
      expect(creatNewCaseStub).to.have.been.called;
      done();
    });
  });

  it('Should respond to A POST request with JSON data', (done) => {
    request.post('/cases')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it('Should pass a PUT request through auth middleware', (done) => {
    request.put('/cases').expect(200, (err, res) => {
      expect(getTokenStub).to.have.been.called;
      done();
    });
  });

  it('Should pass a PUT request to the updateStatus method on case controller', (done) => {
    request.put('/cases').expect(200, (err, res) => {
      expect(updateCaseStub).to.have.been.called;
      done();
    });
  });


  it('Should respond to A PUT request with JSON data', (done) => {
    request.put('/cases')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});