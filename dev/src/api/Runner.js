import io from 'socket.io-client';
const socket = io();

class Runner {
  static run(data, callback) {
    console.log('test');
    socket.once('/runner/run', function (err, data) {
      if (err) {
        console.error(err);
        return;
      }
      callback(data);
    });
    socket.emit('/runner/run', data);
  }
}

export default Runner;