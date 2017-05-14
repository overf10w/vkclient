var express = require('express');
var app = express();
var path = require('path');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

// set up view engine
app.use(express.static(__dirname + '/views'));
