var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('default', function () {
	var YOUR_LOCALS = {};

	gulp.src('./server/views/*.jade')
		.pipe(jade({
			locals: YOUR_LOCALS
		}))
		.pipe(gulp.dest('./dist/'))
});