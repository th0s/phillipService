// Import Libraries
const expect = require('chai');
const request = require('supertest');

// Import Files
const server = require('./server');
const dbHelpers = require('./db/helpers/').dbHelpers;
const reqHelpers = require('./db/helpers/').requestHelpers;

describe('GET /ads Endpoint Testing', () => {
  it('test GET /ads endpoint', (done) => {
    request(server)
      .get('/ads')
      .expect(200, done)
  })
});

describe('GET /users Endpoint Testing', () => {
  it('test GET /ads endpoint', (done) => {
    request(server)
      .get('/ads')
      .expect(200, done)
  })
});

describe('Helper Function Testing', function () {
  describe('DB Helpers', () => {
    describe('Should Return Object', () => {
      it('findAd function', () => {
        let newEntry = dbHelpers.findAd('aut', (err, res) => {
          expect(res).to.be.typeof('object');
        })
      })
    });

    describe('URL property should be formatted correctly', () => {
      it('findAd function', () => {
        let newEntry = dbHelpers.findAd('aut', (err, res) => {
          expect(res.url).to.include('http://')
          expect(res.url).to.include('.com')
        })
      })
    });
  });
})
