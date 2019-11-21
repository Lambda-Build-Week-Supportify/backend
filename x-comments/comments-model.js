const db = require('../data/dbConfig');


module.exports = {
  getAllComments,
  getIssueComments,
  commentOnIssue
};


function getAllComments() {
  return db('comments')

}

function getIssueComments(issues_id) {
  console.log("Made it to comments-model issues_id", issues_id)
  return db('comments as c')
    .join('issues as i', 'i.issues_id', 'c.issues_id')
    .join('users as u', 'u.user_id', 'c.user_id')
    .where('i.issues_id', '=', issues_id)
    .select('c.*', 'i.title', 'i.description', 'u.first_name', 'u.last_name', 'u.email', 'u.board', 'u.primary_admin', 'u.sec_admin')
    .orderBy('c.create_at', 'desc')
}

async function commentOnIssue(newComment) {
  console.log("made it to commentOnIssue in model")
  return db('comments').insert(newComment)

}