const router = require("express").Router();
const Issues = require("./issues-model");
const restricted = require("../auth/restricted-middleware");

// !! don't forget to replace restricted middleware ^^
router.get("/", restricted, (req, res) => {
  console.log("issues-router.js decodedToken", req.decodedJwt);
  Issues.getAllIssues().then(issues => {
    res.status(200).json(issues);
  });
});

router.get("/:id", (req, res) => {
  const issues_id = req.params.id;
  Issues.findIssuesById(issues_id)
    .then(issues => {
      res.status(200).json(issues);
    })
    .catch(err => {
      res.status(404).json({
        errorMessage: "We couldn't find a issue with that id in our database"
      });
    });
});

module.exports = router;
