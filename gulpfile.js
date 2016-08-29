var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');
var clean = require('gulp-clean');

gulp.task('sass', function () {
    gulp.src('source_sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('clean-scripts', function () {
    return gulp.src('public/js/*.js', {read: false})
               .pipe(clean());
});

gulp.task('js', ['clean-scripts'], function() {
  gulp.src('source_js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'));
});

gulp.task('serve', function () {
    gulp.src('./public')
        .pipe(server({
            livereload: true,
            port: 3000,
        }));
});

gulp.task('watch', function () {
    gulp.watch('source_sass/*.scss', ['sass']);
    gulp.watch('source_js/*.js', ['js']);
});

gulp.task('default', ['sass', 'js', 'serve', 'watch']);
