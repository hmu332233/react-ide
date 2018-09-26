var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/../public'));

app.get('/hello', function (req, res) {
  return res.send('Hi!');
});


var server = app.listen(3000, () => {
  console.log('Express listening on port', 3000);
});


// socket
var io = require('socket.io')(server);
var socket_index = require('./routes/socket.js');
socket_index.init(io);