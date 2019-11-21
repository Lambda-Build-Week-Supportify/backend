const router = require("express").Router();
const Schools = require("../schools/schools-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", (req, res) => {
  Schools.getAllSchools()
    .then(allSchools => {
      res.status(200).json(allSchools);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong with your request. " });
    });
});
router.get("/schools-users", (req, res) => {
  Schools.schoolsAndUsers()
    .then(schools => {
      res.status(200).json({ schools });
    })
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong with your request for schools' users"
      });
    });
});

router.get("/:id", (req, res) => {
  const school_id = req.params.id;
  Schools.findSchoolById(school_id)
    .then(school => {
      res.status(200).json({ school });
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Somthing went wrong with your request" });
    });
});

router.post("/", restricted, (req, res) => {
  const schoolInfo = req.body;
  const board = req.decodedJwt.board;
  if (!board) {
    Schools.addSchool(schoolInfo)
      .then(newSchool => {
        res.status(201).json(newSchool);
      })
      .catch(err => {
        res.status(500).json({
          errorMessage:
            "There was a problem adding the new school. Make sure all required fields are filled in."
        });
      });
  } else {
    res
      .status(401)
      .json({ message: "You do not have rights to add a new school" });
  }
});

router.delete("/:id", restricted, (req, res) => {
  const board = req.decodedJwt.board;
  if (!board) {
    Schools.remove(req.params.id)
      .then(info => res.sendStatus(204))
      .catch(err => res.sendStatus(500));
  } else {
    res
      .status(401)
      .json({ message: "You do not have rights to delete a school" });
  }
});
// will add auth/validation middleware here
router.put("/:id", restricted, (req, res) => {
  console.log("req.user", req.user);
  const board = req.decodedJwt.board;
  if (!board) {
    Schools.update(req.params.id, req.body).then(changes => {
      res.status(200).json(changes);
    });
  } else {
    res
      .status(401)
      .json({ message: "You do not have rights to update a school" });
  }
});

module.exports = router;
