const should = require('should');
const supertest = require('supertest');
const app = require('../api/server');


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


describe('users', () => {

  describe('GET /users', function () {
    it('responds with json', function (done) {
      supertest(app)
        .get('/api/auth/login')
        .auth({ username: "baord 1", password: "1234" })
        .set('Accept', 'application/json')
        .expect('Content-Type', "text/html; charset=utf-8")
        .expect(404, done);
    });
  });

})

