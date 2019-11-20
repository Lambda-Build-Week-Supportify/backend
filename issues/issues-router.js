const router = require("express").Router();
const Issues = require("./issues-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", (req, res) => {
  Issues.getAllIssues().then(issues => {
    res.status(200).json(issues);
  });
});
//restricted, checkRole("student"),
router.get("/:id", (req, res) => {
  const issue_id = req.params.id;
  Issues.findIssuesById(issue_id)
    .then(issue => {
      res.status(200).json({ issue });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Somthing went wrong with your request",
        sqlErr: err.toString()
      });
    });
});

router.post("/", (req, res) => {
  const issuesInfo = req.body;

  Issues.addIssues(issuesInfo)
    .then(newIssue => {
      console.log(newIssue);
      res.status(201).json({
        message: "you have successfully added an issue to the database"
      });
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Failed to create new issue",
        sqlErr: err.toString()
      });
    });
});

router.put("/:id", (req, res) => {
  const issues_id = req.params.id;
  const changes = req.body;
  console.log("FindIssuesById issues_id", issues_id, "req.body", req.body)
  Issues.findIssuesById(issues_id)

    .then(issues => {

      if (issues) {
        Issues.updateIssues(issues_id, changes).then(updatedIssue => {
          res.json({ updatedIssue, issues_id });
        });
      } else {
        res.status(404).json({ message: "Could not find issue with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update issue" });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const issues_id = req.params.id;
  console.log(req.decodedJwt)
  const board = req.decodedJwt.board;
if (!board) {
  console.log('you have reached it')
  Issues.removeIssues(issues_id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find issue with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete issue" });
    });
} else {
  res.json({message: "You do not have rights to delete"})
}
});

// function checkRole(role) {
//   return function(req, res, next) {
//     if (role === req.decodedJwt.role) {
//       next();
//     } else {
//       res.status(403).json({ message: "Not Authorized" });
//     }
//   };
// }

module.exports = router;
