var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var path = require('path');
var fs = require('fs');

module.exports = {
  
  config: {
    run_file_path: `${__dirname}/../run_files/temp.js`
  },
  
  run: function (data, callback) {
    
    var code = data.code;
    var run_file_path = this.config.run_file_path;
    
    this.write_file({code: code}, function (err) {
      if (err) {
        console.log(err);
        callback(err);
      }
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
      });
    });
  },
  
  write_file: function ({code, type}, callback) {
    var run_file_path = this.config.run_file_path;
    fs.writeFile(run_file_path, code, 'utf8', function(err) {
      if (err) {
        callback(err);
        return;
      }
      
      callback(null);
    });
    
  }
  
}