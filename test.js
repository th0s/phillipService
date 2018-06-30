const assert = require('assert');
const request = require('supertest');
const server = require('./server');

describe('', function () {
  it('test GET /ads endpoint', function (done) {
    request(server)
      .get('/ads')
      .expect(200, done)
  })
});

describe('', function () {
  it('test GET /ads endpoint', function (done) {
    request(server)
      .get('/ads')
      .expect(200, done)
  })
});

describe('', function () {
  it('test GET /ads endpoint', function (done) {
    request(server)
      .get('/ads')
      .expect(200, done)
  })
});