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

router.post('/connect-user', (req, res) => {
  const { user_id, school_id } = req.body

  Users.findById(user_id)
    .then(user => {
      if (!user) {
        res.status(401).json({ errorMessage: "We don't have a user by that id" })
      } else {
        console.log(user)
        Schools.findSchoolById(school_id)
          .then(school => {
            if (!school) {
              res.status(401).json({ errorMessage: "We don't have a school by that id" })
            } else {
              console.log(school)
            }
          })
      }

    })


})

module.exports = router;