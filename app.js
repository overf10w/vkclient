var express = require('express');
var app = express();
var path = require('path');
var passport = require('passport');
var session = require('express-session');

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

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
