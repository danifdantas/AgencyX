// gulp modules required
// import gulp and whatever plugins we need
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

// Compile Sass with gulp
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./css'));

});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


// gulp.task('default', () =>
//     gulp.src('./images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./images'))
// );

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  });
});