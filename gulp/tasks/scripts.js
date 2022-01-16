var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('../../webpack.config.js');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
// var runSequence = require('run-sequence');
var runSequence = require('gulp4-run-sequence')
// var uglify = require('gulp-uglify');

// var log = require('../log/log.js');
// var notifyError = require('../notify/error.js');

module.exports = function(config, log, error, success) {
  gulp.task('scripts:lint', function() {
    return gulp.src(config.scripts.lint.src)
      .pipe(webpackStream(webpackConfig), webpack)
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(plumber.stop());
  });

  gulp.task('scripts:build', function() {
    return gulp.src(config.scripts.build.src)
      .pipe(webpackStream(webpackConfig), webpack)
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(concat('main.min.js'))
      // .pipe(uglify())
      .pipe(gulp.dest(config.scripts.build.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop());
  });

  gulp.task('scripts', function(callback) {
    return runSequence('scripts:lint', 'scripts:build', callback);
    // return runSequence('scripts:build', callback);
  });
};
