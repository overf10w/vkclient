var express = require('express');
var app = express();
var path = require('path');
var passport = require('passport');
var session = require('express-session');

var index = require('./routes/index');
var auth = require('./routes/auth');
var user = require('./routes/user');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

// set up view engine
app.set('view engine', 'ejs');

app.use(session({ secret: 'anything' }));

// Beware of out-of-order MW hell! 
require('./config/passport')(app);

// Use routes
app.use('/', index);
app.use('/auth', auth);
app.use('/user', user);
