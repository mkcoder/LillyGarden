(function () {

var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('stylus');

gulp.task('jade', function () {
	var YOUR_LOCALS = {};

	gulp.src('./server/*/*.jade')
		.pipe(jade({
			locals: YOUR_LOCALS
		}))
		.pipe(gulp.dest('./dist/'))
});

gulp.task('stylus', function () {
	var YOUR_LOCALS = {};

	gulp.src('./public/styles/*.stylus')
		.pipe(jade({
			locals: YOUR_LOCALS
		}))
		.pipe(gulp.dest('./public/styles/'))
});

gulp.task('default', ['jade', 'stylus']);

})();
