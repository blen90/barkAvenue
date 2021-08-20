const router = require("express").Router();
const User = require("../../models/User.js");

router.post("/signup", ({body}, res) => {
    console.log('*******', body, User);
    User.create(body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});


module.exports = router;