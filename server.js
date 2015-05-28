'use_strict';

var http = require('http');

var express = require('express');
var app = express();

app.use(express.static('vote'));


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/secret', function (req, res, next) {
  res.send("The secret to life is to eat when you're hungry and to sleep when you're sleepy.");
  next(); // pass control to the next handler
});

app.use('/', function (req, res, next) {

  var options = {
    root: __dirname + '/vote/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile('./404.html', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', './404.html');
    }
  });

})

var server = app.listen(5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
