const db = require("../data/dbConfig");

function getAllSchools() {
  return db('schools');
}

function findSchool(filter) {
  return db('schools').where(filter);
}

function schoolsAndUsers() {
  return db('users_schools as us')
    .join('users as u', 'u.user_id', 'us.user_id')
    .join('schools as s', 's.school_id', 'us.school_id')
    .select('s.school_id', 's.school_name', 's.school_city', 's.school_state', 'u.user_id', 'u.first_name', 'u.last_name', 'u.email', 'u.board', 'u.primary_admin', 'u.sec_admin');
}

function findSchoolById(school_id) {
  return db('schools')
    .where({ school_id })
    .first();
}

async function addSchool(schoolInfo) {
  const [school_id] = await db('schools').insert(schoolInfo, "school_id");

  return findSchoolById(school_id);

}

function connectUser(user_id, school_id) {
  return db('users_schools')
    .insert({ user_id: user_id, school_id: school_id })
}

function update(school_id, changes) {
  return db('schools')
    .where({ school_id })
    .update(changes);
}

function remove(school_id) {
  return db('schools')
    .where('school_id', school_id)
    .del();
}

function removeUserFromSchool(user_id, school_id) {
  console.log(user_id, school_id);
  return db('users_schools')
    .where({ user_id, school_id })
    .del()
}



module.exports = {
  getAllSchools,
  findSchool,
  findSchoolById,
  schoolsAndUsers,
  addSchool,
  connectUser,
  update,
  remove,
  removeUserFromSchool
}