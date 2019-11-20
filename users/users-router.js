const router = require("express").Router();
const Users = require("./users-model");
const restricted = require("../auth/restricted-middleware");

// !! don't forget to replace restricted middleware restricted, ^^
router.get("/", (req, res) => {
const board = req.decodedJwt.board;
if (board) {
  users.find()
}
  console.log("users-router.js decodedToken", req.decodedJwt);
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Sorry, internal server error." });
    });
});

router.get("/:id", (req, res) => {
  const user_id = req.params.id;
  Users.findById(user_id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res
        .status(404)
        .json({
          errorMessage: "We couldn't find a user with that id in our database"
        });
    });
});
// will add auth/validation middleware here
router.delete("/:id", (req, res) => {
  Users.remove(req.params.id)
    .then(info => res.sendStatus(204))
    .catch(err => res.sendStatus(500));
});
// will add auth/validation middleware here
router.put("/:id", (req, res) => {
  console.log("req.user", req.user);
  Users.update(req.params.id, req.body).then(changes => {
    res.status(200).json(changes);
  });
});

module.exports = router;
