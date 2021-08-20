const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  login,
} = require('../../controllers/user-controllers');

// import middleware
const { authMiddleware } = require('../../utils/auth');

const User = require("../../models/User.js");
// router.post("/", ({body}, res) => {
//     console.log('*******', body, User);
//     User.create(body)
//     .then(user => {
//       res.json(user);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// router.route('/profile').get(authMiddleware, getSingleUser);
router.route('/login').post(login);
router.route('/signup').post(createUser);

module.exports = router;
