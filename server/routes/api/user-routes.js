const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  login,
} = require('../../controllers/user-controllers');

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route('/profile').get(authMiddleware, getSingleUser);
router.route('/login').post(login);
router.route('/signup').post(createUser);

module.exports = router;
