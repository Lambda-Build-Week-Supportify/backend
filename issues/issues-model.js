const db = require("../data/dbConfig");

function getAllIssues() {
  return db("issues");
}

function findIssues(filter) {
  return db("issues").where(filter);
}

function findIssuesById(issues_id) {
  return db("issues")
    .where("issues_id", issues_id)
    .first();
}

function addIssues(issuesInfo) {
  console.log(issuesInfo);
  return db("issues").insert(issuesInfo);
}

function removeIssues(issues_id) {
  return db("issues")
    .where("issues_id", issues_id)
    .del();
}

function updateIssues(issues_id, changes) {
  return db('issues')
    .where({ issues_id })
    .update(changes);
}

module.exports = {
  getAllIssues,
  findIssues,
  findIssuesById,
  addIssues,
  removeIssues,
  updateIssues
};
