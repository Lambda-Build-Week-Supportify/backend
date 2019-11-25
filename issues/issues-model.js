const db = require("../data/dbConfig");

function getAllIssues() {
  return db("issues").orderBy('issues_id', 'desc');
}

function findIssue(filter) {
  return db("issues").where(filter);
}

function findIssueById(issues_id) {
  return db("issues")
    .where("issues_id", issues_id)
    .first();
}

function addIssue(issueInfo) {
  console.log(issueInfo);
  return db("issues").insert(issueInfo);
}

function removeIssue(issue_id) {
  return db("issues")
    .where({ issues_id: issue_id })
    .del();
}

function updateIssue(issues_id, changes) {
  console.log("issues-model updateIssues reached issues_id, changes:", issues_id, changes);
  return db("issues")
    .update(changes)
    .where({ issues_id });

}

function userIssues(user_id) {
  return db("issues as i")
    .join("users as u", "u.user_id", "i.user_id")
    .select(
      "u.first_name",
      "u.last_name",
      "u.board",
      "u.primary_admin",
      "u.sec_admin",
      "i.*"
    )
    .where("u.user_id", "=", user_id);
}
module.exports = {
  getAllIssues,
  findIssue,
  findIssueById,
  addIssue,
  removeIssue,
  updateIssue,
  userIssues
};
