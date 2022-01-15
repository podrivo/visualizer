var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

module.exports = function(config, log, error, success) {
  gulp.task('watch', function() {
    var msg = gutil.colors.bgBlack(' 🔄  ') + gutil.colors.black.bgGreen(' Syncing is on. Use URLs below to access.');
    console.log(msg);

    browserSync.init({
      server: "./dist",
      port: 8000,
      ui: {
        port: 8001
      },
      open: false,
      notify: false
    });

    gulp.watch(config.fonts.src, gulp.series('fonts', reload));
    gulp.watch(config.html.src, gulp.series('html', reload));
    gulp.watch(config.images.src, gulp.series('images', reload));
    gulp.watch(config.scripts.lint.src, gulp.series('scripts', reload));
    gulp.watch(config.styles.build.src, gulp.series('styles', reload));
  });
};
