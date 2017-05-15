var express = require('express');
var app = express();
var path = require('path');

var index = require('./routes/index');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

// set up view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Use routes
app.use('/', index);
