'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

// Static server
gulp.task('browser-sync', ['scripts', 'sass', 'pug'], () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: ['.tmp', './public/']
    }
  });
});

gulp.task('scripts', () => {
  return gulp.src(['./public/scripts/*.js'])
  .pipe(concat('./main.js'))
  .pipe(gulp.dest('.tmp/scripts/'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', () => {
  return gulp.src('./public/styles/*.scss')
    .pipe(sassGlob())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('pug', () => {
  return gulp.src('./public/**/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('.tmp'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', () => {
  gulp.watch('./public/**/*.pug', ['pug']);
  gulp.watch('./public/styles/**/*.scss', ['sass']);
  gulp.watch('./public/scripts/**/*.js', ['scripts']);
});

gulp.task('default', () => {
  runSequence(
    'pug',
    'sass',
    'scripts',
    'browser-sync',
    'watch'
  );
});
