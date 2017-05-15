var express = require('express');
var router = express.Router();

// MW
router.use('/', function (req, res, next) {
  if (!req.user) {
    res.redirect('/');
  }
  next();
});

router.get('/', function (req, res, next) {
  // user is added to req by Passport
  res.render('users', { user: { name: req.user.displayName } });
});

module.exports = router;
