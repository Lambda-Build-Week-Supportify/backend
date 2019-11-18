const db = require("../data/dbConfig");



function getAllSchools() {
  return db('schools');
}


function findSchool(filter) {
  return db('schools').where(filter);
}

function schoolsAndUsers() {
  return db.raw('select s.school_name, s.school_city, s.school_state, u.first_name, u.last_name, u.board, u.email from users_schools us join users as u on u.user_id = us.user_id join schools as s on s.school_id = us.school_id')
}


function findSchoolById(school_id) {
  return db('schools')
    .where({ school_id })
    .first();
}


async function addSchool(schoolInfo) {
  const [school_id] = await db('schools').insert(schoolInfo);

  return findSchoolById(school_id);

}





module.exports = {
  getAllSchools,
  findSchool,
  findSchoolById,
  schoolsAndUsers,
  addSchool
}