
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_schools').insert([
    { user_id: 1, school_id: 1 },
    { user_id: 2, school_id: 2 },
    { user_id: 3, school_id: 1 },
    { user_id: 3, school_id: 2 },
    { user_id: 3, school_id: 3 }
  ]);

};
