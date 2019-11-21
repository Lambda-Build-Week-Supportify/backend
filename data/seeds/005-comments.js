
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('comments').insert([
    { comment: "I'm looking into this issue", user_id: 1, issues_id: 1 },
    { comment: "I thought this was taken care of!", user_id: 2, issues_id: 2 },
    { comment: "This issue has been fixed.", user_id: 3, issues_id: 3 }
  ]);
};
