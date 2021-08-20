const router = require('express').Router();
const path = require('path');
const htmlRoute = require('./htmlRoute');

router.use('/api', htmlRoute);

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;
