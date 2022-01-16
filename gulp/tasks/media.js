// var gulp = require('gulp');
// var pug = require('gulp-pug');
// var browserSync = require('browser-sync').create();
// var plumber = require('gulp-plumber');

// var log = require('../log/log.js');
// var notifyError = require('../notify/error.js');

// module.exports = function(config, log, error, success) {
//   gulp.task('html', function() {
//     return gulp.src(config.html.src)
//       .pipe(pug({
//         pretty: true
//       }))
//       .pipe(plumber({
//         errorHandler: error
//       }))
//       .pipe(gulp.dest(config.html.dest))
//       .pipe(browserSync.stream())
//       .pipe(plumber.stop());
//   });
// };

var gulp = require('gulp')
var plumber = require('gulp-plumber')
var runSequence = require('gulp4-run-sequence')
var browserSync = require('browser-sync').create();

module.exports = function (config) {
  gulp.task('music', function () {
    return gulp.src(config.media.src)
      .pipe(plumber())
      .pipe(gulp.dest(config.media.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })

  gulp.task('media', function (callback) {
    return runSequence('music', callback)
  })
}
