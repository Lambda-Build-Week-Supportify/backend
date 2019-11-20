const router = require('express').Router();
const Users = require('../users/users-model');
const Schools = require('../schools/schools-model');


// endpoint: api/users-schools/shcools
router.get('/all', (req, res) => {
  Schools.schoolsAndUsers()
    .then(schools => {
      res.status(200).json(schools);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong with your request." })
    })
})

// endpoint: api/users-schools/shcool/:id
router.get('/school/:id', (req, res) => {
  const school_id = req.params.id;
  Schools.findSchoolById(school_id)
    .then(school => {
      if (school) {
        Schools.aSchoolUsers(school_id)
          .then(school => {
            res.status(200).json(school);
          })
      } else {
        res.status(404).json({ errorMessage: "Sorry, there's either no school by that id, or that school is not connected to any users" })
      }

    })

    .catch(err => {
      res.status(500).json({ message: "Something went wrong with your request." })
    })
})

// endpoint: api/users-schools/user/:id
router.get('/user/:id', (req, res) => {
  const user_id = req.params.id;
  Users.findById(user_id)
    .then(user => {
      if (user) {
        Schools.aUserSchools(user_id)
          .then(user => {
            res.status(200).json(user);
          })
      } else {
        res.status(404).json({ errorMessage: "Sorry, there's either no user by that id, or that user is not connected to any schools" })
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong with your request" })
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

router.delete('/disconnect', (req, res) => {
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