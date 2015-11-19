var express = require('express');
var path = require('path');
var session = require('express-session');
var app = express();
app.use(session({secret: 'codingdojorocks'}));
var bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./config/mongoose.js');
require('./config/routes.js')(app);
app.use(express.static(path.join(__dirname, './client')));


app.listen(8000, function() {
  console.log('we ballin on: 8000');
});