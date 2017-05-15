var express = require('express');
var passport = require('passport');
var router = express.Router();

// VK
router.route('/vkontakte')
  .get(passport.authenticate('vkontakte'));

router.route('/vkontakte/callback')
  .get(passport.authenticate('vkontakte', {
    successRedirect: '/user',
    failure: '/'
  }));

module.exports = router;
