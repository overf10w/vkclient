var express = require('express');
var passport = require('passport');
var router = express.Router();

// VK
router.route('/vkontakte')
  .get(passport.authenticate('vkontakte', { scope: ['status', 'email', 'friends', 'notify'] }));

router.route('/vkontakte/callback')
  .get(passport.authenticate('vkontakte', {
    successRedirect: '/',
    failure: '/'
  }));

module.exports = router;
