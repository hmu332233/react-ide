import io from 'socket.io-client';
const socket = io();

class Compiler {
  static compile(data, callback) {
    console.log('test');
    socket.on('/compile', function (err, data) {
      if (err) {
        console.error(err);
        return;
      }
      callback(data);
    });
    socket.emit('/compile', data);
  }
}

export default Compiler;