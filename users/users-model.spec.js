const db = require("../data/dbConfig.js");
const { add } = require("./users-model.js");
const users = require("./users-router.js");

// describe("users model", function () {
//   describe("add()", function () {
//     beforeEach(async () => {
//       await db("users");
//     });

//     it("should add a user", async function () {
//       await add({
//         user_id: 12,
//         username: "Candace5",
//         password: "1234",
//         first_name: "Test",
//         last_name: "Testing",
//         email: "test@testing.com",
//         city: "Test",
//         state: "IL",
//         board: false,
//         primary_admin: true
//       });
//       const users = await db("users");
//       expect(users).toHaveLength(13);
//     });

//     it("should insert the provided user", async function () {
//       await add({
//         user_id: 13,
//         username: "Candace5",
//         password: "1234",
//         first_name: "Test",
//         last_name: "Testing",
//         email: "test@testing.com",
//         city: "Test",
//         state: "IL",
//         board: false,
//         primary_admin: true
//       });
//       const users = await db("users");
//       expect(users).toHaveLength(13);
//       expect(users[0]).username.toBe("Candace5");
//     });

//     it("should return the inserted user", async function () {
//       let users = await add({
//         user_id: 13,
//         username: "Candace5",
//         password: "1234",
//         first_name: "Test",
//         last_name: "Testing",
//         email: "test@testing.com",
//         city: "Test",
//         state: "IL",
//         board: false,
//         primary_admin: true
//       });
//       expect(users.username).toBe("Candace5");
//       expect(users.id).toBeDefined();
//     });
//   });
// });
