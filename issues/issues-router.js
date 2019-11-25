const router = require("express").Router();
const Issues = require("./issues-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", (req, res) => {
  Issues.getAllIssues().then(issues => {
    res.status(200).json(issues);
  });
});

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

router.get("/user/:id", (req, res) => {
  const user_id = req.params.id;
  Issues.userIssues(user_id)
    .then(issues => {
      if (issues) {
        res.status(200).json(issues);
      } else {
        res
          .status(404)
          .json({ message: "there are no issues associated with this user" });
      }
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "Somthing went wrong with your request",
        sqlErr: err.toString()
      });
    });
});

router.post("/", restricted, (req, res) => {
  const issuesInfo = req.body;
  const board = req.decodedJwt.board;
  if (!board) {
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
  } else {
    res.status(401).json({ message: "You do not have rights to add an issue" });
  }
});

router.put("/:id", restricted, (req, res) => {
  const issues_id = req.params.id;
  const changes = req.body;
  console.log("FindIssuesById issues_id", issues_id, "req.body", req.body);
  const board = req.decodedJwt.board;
  if (!board) {
    Issues.findIssuesById(issues_id)
      .then(issues => {
        if (issues) {
          Issues.updateIssues(issues_id, changes).then(updatedIssue => {
            res.json({ updatedIssue, issues_id });
          });
        } else {
          res
            .status(404)
            .json({ message: "Could not find issue with given id" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to update issue" });
      });
  } else {
    res
      .status(401)
      .json({ message: "You do not have rights to edit an issue" });
  }
});

router.delete("/:id", restricted, (req, res) => {
  const issues_id = req.params.id;
  console.log("issues_id", issues_id);
  const board = req.decodedJwt.board;
  if (!board) {
    console.log("you have reached it");
    Issues.removeIssues(issues_id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res
            .status(404)
            .json({ message: "Could not find issue with given id" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to delete issue" });
      });
  } else {
    res
      .status(401)
      .json({ message: "You do not have rights to delete an issue" });
  }
});

module.exports = router;
