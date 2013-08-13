// Scout Ventures Mail + Utility Server
// Author: Ramzi Abdoch

// TODO
// ----
// Log all e-mails

var express = require("express")

var app = express();
var oneDay = 86400000;

app.use(express.compress());
app.use(express.static(__dirname + '/public', {maxAge: oneDay}));
app.use(express.bodyParser());

var port = process.env.PORT || 80;

app.listen(port, function() {
  console.log("Listening on " + port);
});