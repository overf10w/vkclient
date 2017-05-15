var express = require('express');
var passport = require('passport');
var router = express.Router();

// VK
router.route('/vkontakte')
  .get(passport.authenticate('vkontakte', {
    successRedirect: '/index.html',
    failure: '/index.html'
  }));

module.exports = router;