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

describe('issues', () => {

  it('should return school info for school 1', async (done) => {
    supertest(app)
      .get('/api/issues/1')
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      })
  })
  it('should return error 404', (done) => {
    supertest(app)
      .get('/api/issues/50000')
      .end((err, res) => {
        res.status.should.equal(404);
      })
    done();
  })
  it('resoponds with json and 409', (done) => {
    supertest(app)
      .post('/api/issues')
      .send({
        "priority": "high",
        "title": "TEST ISSUE 2",
        "description": "Kitchen",
        "equipment": "kitchen sink",
        "general_issues": "kitchen sink needs repair",
        "estimated_cost": "$75",
        "completed": false,
        "needs_attention": true,
        "scheduled": false,
        "user_id": 2
      })
      .set('Accept', 'application/json')
      .expect(201, done)
  })
  it('responds with json and 200', function (done) {
    supertest(app)
      .get('/api/issues')
      .send({ username: "Test User 3", password: "1234" })
      .set('Accept', 'application/json')
      .expect(200, done);
  })
})