const router = require("express").Router();
const Users = require("../users/users-model");
const Issues = require("../issues/issues-model");
const Comments = require('./comments-model')
const restricted = require("../auth/restricted-middleware");


router.get('/', (req, res) => {
  Comments.getAllComments()
    .then(comments => {
      res.status(200).json(comments);

    })
    .catch(err => {
      res.status(500).json({ message: "Sorry something went wrong trying to retrieve all the commenets" })
    })
})


router.get('/issue/:id', (req, res) => {
  const issue_id = req.params.id;
  Comments.getIssueComments(issue_id)
    .then(comments => {
      if (comments) {
        res.status(200).json(comments);
      } else {
        res.status(404).json({ message: "There's no comments yet for this issue" })
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Sorry, internal server error." });
    });
})

router.post('/', (req, res) => {
  const issues_id = req.body.issues_id;
  const newComment = req.body;
  Comments.commentOnIssue(newComment)
    .then(info => {
      console.log("comments-router /post info", info);
      if (info) {
        res.status(201).json({ message: "You've made a new comment to an issue", info: info })
      } else {
        res.status(404).json({ message: "Sorry, we couldn't find and issue with that id" })
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Sorry, internal server error." });
    })
})


module.exports = router;