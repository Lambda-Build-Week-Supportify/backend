const should = require('should');
const supertest = require('supertest');
const app = require('../api/server');
const db = require('../data/dbConfig');


var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('schools', () => {

  it('should return school info for school 1', async (done) => {
    supertest(app)
      .get('/api/schools/1')
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      })
  })
  it('should return error 404', (done) => {
    supertest(app)
      .get('/api/schools/50000')
      .end((err, res) => {
        res.status.should.equal(404);
      })
    done();
  })
})

describe('Auth register and login', () => {

  describe('/auth/register', function () {

    beforeEach(async () => {
      await db("users_schools", "issues", "comments", "users").truncate();
    });

    /* it('resoponds with json and 201', (done) => {
      supertest(app)
        .post('/api/auth/register')
        .send({
          "username": "Test User 3",
          "password": "1234",
          "first_name": "Test Wizar",
          "last_name": "Smith",
          "email": "test1234@school.com",
          "city": "San Dimas",
          "state": "CA",
          "board": true,
          "primary_admin": false,
          "sec_admin": false
        })
        .set('Accept', 'application/json')
        .expect(201, done)
    }) */
    it('responds with json and 200', function (done) {
      supertest(app)
        .post('/api/auth/login')
        .send({ username: "Test User 3", password: "1234" })
        .set('Accept', 'application/json')
        .expect(200, done);
    })
  })
})

/* .expect('Content-Type', "application/json; charset=utf-8") */