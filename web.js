var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("I'm watching you 0.0");
});

app.get('/hi',function(request, response) {
    response.send("Hi");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
