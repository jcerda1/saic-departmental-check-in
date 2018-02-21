const proxyquire = require('proxyquire');
const sinon = require('sinon');
const supertest = require('supertest');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
const app = require('../server/app.js');
const getTokenStub = require('../test/mocks/authMock.js');

chai.use(sinonChai);


describe('Index and Fallback Routes', () => {
  let request;

  beforeEach(() => {
    request = supertest(app);
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
  let getTokenSpy;
  let getContactStub;
  let contactRoute;

  beforeEach(() => {
    getTokenSpy = sinon.spy();

    contactRoute = proxyquire('../server/routes/contactRoutes.js', {
      '../controllers/salesforce/auth.js': {
        getToken: getTokenSpy
      }
    })

    contactRoute(app)
    request = supertest(app);
  });

  it('it should pass the request through authentication middleware', (done) => {
    request.get('/contact').expect(200, (err, res) => {
      expect(getTokenSpy).to.have.been.called();
      done();
    });
  });

});