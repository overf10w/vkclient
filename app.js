var express = require('express');
var app = express();
var path = require('path');
var passport = require('passport');
var session = require('express-session');

const VKontakteStrategy = require('passport-vkontakte').Strategy;

var index = require('./routes/index');
var auth = require('./routes/auth');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

// set up view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Use routes
app.use('/', index);
app.use('/auth', auth);

app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new VKontakteStrategy(
  {
    clientID: '6032264', // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
    clientSecret: 'PNMX4QFSzlxrpkua7nIk',
    callbackURL: "http://localhost:3000/auth/vkontakte"
  },
  function myVerifyCallbackFn(accessToken, refreshToken, params, profile, done) {
    console.log(profile);
    console.log(params);
    // Now that we have user's `profile` as seen by VK, we can
    // use it to find corresponding database records on our side.
    // Also we have user's `params` that contains email address (if set in 
    // scope), token lifetime, etc.
    // Here, we have a hypothetical `User` class which does what it says.
    // User.findOrCreate({ vkontakteId: profile.id })
    //   .then(function (user) { done(null, user); })
    //   .catch(done);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
