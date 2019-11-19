const router = require('express').Router();
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

// !! don't forget to replace restricted middleware restricted, ^^
router.get('/', (req, res) => {

  console.log("users-router.js decodedToken", req.decodedJwt)
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
})

router.get('/:id', (req, res) => {
  const user_id = req.params.id;
  Users.findById(user_id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(404).json({ errorMessage: "We couldn't find a user with that id in our database" })
    })

})


module.exports = router;