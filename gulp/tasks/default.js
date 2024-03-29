var gulp = require('gulp');
var gutil = require('gulp-util');
// var runSequence = require('run-sequence').use(gulp);
var runSequence = require('gulp4-run-sequence')

module.exports = function(config, log, error, success) {
  gulp.task('default', function(callback) {
    var msg = gutil.colors.bgBlack(' 🚴  ') + gutil.colors.black.bgGreen(' Start building. ');
    console.log(msg);
    
    runSequence('clean', ['fonts', 'html', 'images', 'scripts', 'styles', 'media'], callback);
    // callback;
  });
};
