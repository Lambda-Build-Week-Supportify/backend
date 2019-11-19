require('dotenv').config();
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const jwt = require('jsonwebtoken')
const Users = require('../users/users-model');




router.post('/register', (req, res) => {
  const userInfo = req.body;
  const hash = bcrypt.hashSync(userInfo.password, 10);
  userInfo.password = hash;

  Users.add(userInfo)
    .then(newUser => {
      console.log("New User", newUser)
      const token = generateToken(newUser);
      console.log("Token: ", token);
      res.status(201).json({ token, newUser })
    })
    .catch(error => {
      res.status(500).json({ error: error, message: "This username already exists!" });
    });

})

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  console.log("username: ", username, "password: ", password);
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        console.log(token)
        res.status(200).json({
          message: `Welcome ${user.username}`,
          name: user.username,
          department: user.department,
          token
        });
      } else {
        console.log("auth router, not loggin in")
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });

})


router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.json({ message: 'there was a problem logging you out.' })
      } else {
        console.log("LOGOUT YOU ARE LOGGED OUT")
        res.sendStatus(204);
      }
    })
  } else {
    console.log("LOGOUT YOU WEREN'T LOGGED IN")
    res.status(200).json({ message: "You weren't logged in" })
  }
})


function generateToken(user) {
  // header payload and verify signature
  //payload -> username, id, department
  const payload = {
    sub: user.user_id,
    username: user.username,

  }
  console.log('PAYLOAD: ', payload);
  const secret = process.env.JWT_SECRET || "no evn secret";

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secret, options)

}

module.exports = router;
