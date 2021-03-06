module.exports = {
  init: function (io) {
    var self = this;
    io.on('connection', function (socket) {
      console.log('connect!');
      self.init_runner(socket);
    });
  },
  
  // runner module
  init_runner: function (socket) {
    
    var runner = require(__dirname + '/../modules/runner.js');
    
    socket.on('/runner/run', function (data) {
      
      data = Object.assign({
        code: '',
        option: {}
      }, data);
      
      runner.run(data, function (err, data) {
        console.log('/runner/run');
        socket.emit('/runner/run', null, {
          stdout: data.stdout,
          stderr: data.stderr
        });
      });
    });
  }
}