var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/../public'));

app.get('/hello', function (req, res) {
  return res.send('Hi!');
});


var server = app.listen(3000, () => {
  console.log('Express listening on port', 3000);
});


var io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('connect!');
  
  socket.on('/compile', function (data) {
    
    console.log('/compile');
    socket.emit('/compile', null, data);
  });
});