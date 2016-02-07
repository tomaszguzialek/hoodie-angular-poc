var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('hoodie', function() {
    var child = exec('node ./node_modules/hoodie-server/bin/start --www . --custom-ports 6001,6002,6003');
      child.stdout.on('data', function(data) {
          console.log(data);
      });
      child.stderr.on('data', function(data) {
          console.log(data);
      });
      return child;
});
