const router = require('express').Router();
const Schools = require('../schools/schools-model');


router.get('/', (req, res) => {
  Schools.getAllSchools()
    .then(allSchools => {
      res.status(200).json(allSchools);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Something went wrong with your request. " })
    })
})
router.get('/schools-users', (req, res) => {
  Schools.schoolsAndUsers()
    .then(schools => {
      res.status(200).json({ schools });
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong with your request for schools' users" })
    })
})

router.get('/:id', (req, res) => {
  const school_id = req.params.id;
  Schools.findSchoolById(school_id)
    .then(school => {
      if (school) {
        res.status(200).json({ school });
      } else {
        res.status(404).json({ message: "We don't have a school by that id" })
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Somthing went wrong with your request" })
    })
})



router.post('/', (req, res) => {
  const schoolInfo = req.body;
  Schools.addSchool(schoolInfo)
    .then(newSchool => {
      res.status(201).json(newSchool);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "There was a problem adding the new school. Make sure all required fields are filled in." })
    })
})

router.delete('/:id', (req, res) => {
  Schools.remove(req.params.id)
    .then(info => res.sendStatus(204))
    .catch(err => res.sendStatus(500))
});


// will add auth/validation middleware here
router.put('/:id', (req, res) => {

  const school_id = req.params.id;
  const changes = req.body;
  Schools.findSchoolById(school_id)
    .then(school => {
      if (school) {
        Schools.updateSchool(school_id, changes)
          .then(changes => {
            res.status(200).json(changes);
          })
      } else {
        res.status(404).json({ message: "Sorry, we don't have a school by that id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong with your request." })
    })
});


module.exports = router;