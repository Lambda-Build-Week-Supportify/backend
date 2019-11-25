const should = require('should');
const supertest = require('supertest');
const app = require('../api/server');
const db = require('../data/dbConfig');
const assert = require('assert');

const primary_admin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQ0LCJ1c2VybmFtZSI6IkNhcnRtYW4xIiwiYm9hcmQiOmZhbHNlLCJwcmltYXJ5X2FkbWluIjp0cnVlLCJzZWNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NzQ0NTYyMTcsImV4cCI6MTU3NDU0MjYxN30.pgF85wJ_NaT2mDdViPlGnivaSPW9WD77pH78R19F3-Y";

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Auth register and login', () => {

  describe('/auth/register', function () {

    beforeEach(async () => {
      await db("users_schools", "issues", "comments", "users").truncate();
    });

    it('resoponds with json and 409', (done) => {
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
        .set('Authorization', primary_admin)
        .set('Accept', 'application/json')
        .expect(409, done)
    })
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