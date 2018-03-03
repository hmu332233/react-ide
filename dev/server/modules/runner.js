var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var path = require('path');
var fs = require('fs');

module.exports = {
  run: function (data, callback) {
    
    var code = data.code;
    var run_file_path = `${__dirname}/../run_files/temp.js`
    
    exec(`node ${run_file_path}`, function (err, stdout, stderr) {
      if (err) {
        console.log(err);
        callback(err);
        return;
      }
      callback(null, {
        stdout: stdout,
        stderr: stderr
      });
    })
  }
  
}