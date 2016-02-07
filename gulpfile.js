var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('hoodie', function() {
    var child = exec('npm start -- --admin-password hoodie --www . --port 6001 --admin-port 6002 --db-port 6003');
      child.stdout.on('data', function(data) {
          console.log(data);
      });
      child.stderr.on('data', function(data) {
          console.log(data);
      });
      return child;
});
