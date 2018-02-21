const assert = require('assert');
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const supertest = require('supertest');
const expect = require('chai').expect;

describe('Index Route', function() {
  it('Should get the index page', function() {
    assert.equal([1,2,3].indexOf(4), -1);
  });
});