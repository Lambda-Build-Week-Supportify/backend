const db = require("../data/dbConfig");

function getAllIssues() {
  return db("issues");
}

function findIssues(filter) {
  return db("issues").where(filter);
}

function findIssuesById(issues_id) {
  return db("issues")
    .where({ issues_id })
    .first();
}

async function addIssues(issuesInfo) {
  const [issues_id] = await db("issues").insert(issuesInfo);

  return findIssuesById(issues_id);
}

module.exports = {
  getAllIssues,
  findIssues,
  findIssuesById,
  addIssues
};
