const router = require('express').Router();
const Users = require('../users/users-model');
const Schools = require('../schools/schools-model');

router.get('/schools', (req, res) => {
  Schools.schoolsAndUsers()
    .then(schools => {
      res.status(200).json(schools);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong with your request for schools' users" })
    })
})

module.exports = router;