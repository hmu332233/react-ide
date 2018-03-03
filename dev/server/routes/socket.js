module.exports = {
  init: function (io) {
    var self = this;
    io.on('connection', function (socket) {
      console.log('connect!');
      self.init_compiler(socket);
    });
  },
  
  // compiler module
  init_compiler: function (socket) {
    socket.on('/compile', function (data) {
      console.log('/compile');
      socket.emit('/compile', null, data);
    });
  }
}