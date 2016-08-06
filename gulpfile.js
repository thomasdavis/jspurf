var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var open = require('gulp-open');
var port = process.env.port || 3000;

gulp.task('watch', function() {
    gulp.watch('./app/index.html', ['html']);
    gulp.watch('./app/dist/**/*.js', ['js']);
    gulp.watch('./app/dist/**/*.css', ['css']);
    gulp.watch('./app/src/**/*.scss', ['sass']);
});
gulp.task('webpack', function() {
    gulp.src('app/src/js/app.js')
	  .pipe(webpack( require('./webpack.config.js') ))
	  .pipe(gulp.dest('./'));
});
gulp.task('default', ['watch', 'webpack']);
