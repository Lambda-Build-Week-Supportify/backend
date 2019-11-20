const router = require('express').Router();
const Users = require('../users/users-model');
const Schools = require('../schools/schools-model');

// endpoint: api/users-schools/shcools
router.get('/schools', (req, res) => {
  Schools.schoolsAndUsers()
    .then(schools => {
      res.status(200).json(schools);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong with your request for schools' users" })
    })
})

// endpoint: api/users-schools/shcools/:id
router.get('/schools/:id', (req, res) => {
  const school_id = req.params.id;
  Schools.aSchoolUsers(school_id)
    .then(school => {
      res.status(200).json(school);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong with your request for a school's users" })
    })
})

// endpoint: api/users-schools/users/:id
router.get('/users/:id', (req, res) => {
  const user_id = req.params.id;
  Schools.aUserSchools(user_id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong with your request for schools' users" })
    })
})




// endpoint: api/users-schools/connect-user
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
              Schools.connectUser(user_id, school_id)
                .then(info => {
                  res.status(200).json({ info })
                })
            }
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({ errorMessage: err })
          })
      }

    })
})


router.delete('/schools', (req, res) => {
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
              Schools.removeUserFromSchool(user_id, school_id)
                .then(info => {
                  res.status(200).json({ info, message: "the user-school relationship was successfully deleted" })
                })
            }
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({ errorInfo: err })
          })
      }

    })


})

module.exports = router;