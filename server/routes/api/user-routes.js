const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  login,
} = require('../../controllers/user-controllers');

// import middleware
// const { authMiddleware } = require('../../utils/auth');


// router.post("/create", (req, res, next) => {
//   console.log("route hit!!!!!!!!!")
// })


router.route('/create').post(createUser);
// router.route('/profile').get(authMiddleware, getSingleUser);
// router.route('/login').post(login);


module.exports = router;
