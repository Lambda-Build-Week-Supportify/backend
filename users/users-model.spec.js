const db = require("../data/dbConfig.js");
const { add } = require("./users-model.js");
const users = require("./users-router.js");

describe("users model", function () {
  describe("add()", function () {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should add a user", async function () {
      await add({
        username: "Testing1",
        password: "1234",
        first_name: "Test",
        last_name: "Testing",
        email: "test@testing.com",
        city: "Test",
        state: "IL",
        board: false
      });
      const users = await db("users");
      expect(users).toHaveLength(1);
    });

    it("should insert the provided user", async function () {
      await add({
        username: "Testing1",
        password: "1234",
        first_name: "Test",
        last_name: "Testing",
        email: "test@testing.com",
        city: "Test",
        state: "IL",
        board: false
      });
      const users = await db("users");
      expect(users).toHaveLength(1);
      expect(users[0]).username.toBe("Testing1");
    });

    it("should return the inserted user", async function () {
      let users = await add({
        username: "Testing1",
        password: "1234",
        first_name: "Test",
        last_name: "Testing",
        email: "test@testing.com",
        city: "Test",
        state: "IL",
        board: false
      });
      expect(users.username).toBe("Testing1");
      expect(users.id).toBeDefined();
    });
  });
});
