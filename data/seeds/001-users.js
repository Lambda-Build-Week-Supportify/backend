
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    { username: 'bill123', password: "1234", first_name: "Bill", last_name: "Preston Esquire", email: "bill@school.com", city: "San Dimas", state: "CA", board: false },
    { username: 'ted123', password: "1234", first_name: "Ted", last_name: "Logan", email: "ted@school.com", city: "San Dimas", state: "CA", board: false },
    { username: 'sally123', password: "1234", first_name: "Sally", last_name: "Logan", email: "sally@school.com", city: "New York", state: "NY", board: true }
  ]);
};
