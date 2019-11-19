const router = require('express').Router();
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const schoolsRouter = require('../schools/schools-router');
const usersSchoolsRouter = require('../users_schools/users-schools-router');
const issuesRouter = require('../issues/issues-router');


router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/schools', schoolsRouter);
router.use('/users-schools', usersSchoolsRouter);
router.use('/issues', issuesRouter);


router.get('/', (req, res) => {
  res.json({ api: "THIS IS YOUR BASE API ROUTER. OTHERS: /api/auth  /api/users " })
})

module.exports = router;