var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');

gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
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
});

gulp.task('build', ['sass']);

gulp.task('default', ['sass', 'serve', 'watch']);
