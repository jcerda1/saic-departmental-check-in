const proxyquire = require('proxyquire');
const sinon = require('sinon');
const supertest = require('supertest');
const expect = require('chai').expect;
const app= require('../server/app.js');

describe('Index and Fallback Routes', () => {
  let request;

  beforeEach(() => {
    request = supertest(app);
  });

  it('Should get the index page', (done) => {
    request.get('/').expect(200, (err, res) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=UTF-8');
      done();
    })
  });

  it('Should fallback to the index page for undefined routes', (done) => {
    request.get('/random').expect(200, (err, res) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=UTF-8');
      done();
    })
  });

});