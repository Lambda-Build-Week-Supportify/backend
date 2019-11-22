const supertest = require("supertest");

const app = require("../api/server.js");

it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

describe("users endpoint", () => {
  describe("GET /users", function() {
    it("login user 3", function(done) {
      supertest(app)
        .get("/api/auth/login")
        .auth({ username: "sally123", password: "1234" })
        .then(res => {
          expect(users.id).toBeDefined();
        });
      done();
    });
  });
});
