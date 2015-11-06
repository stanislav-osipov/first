var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('copy', function() {
	gulp.src('./src/**/*')
		.pipe(gulp.dest('./dist'));
});

gulp.task('webserver', function() {
	gulp.src('dist')
		.pipe(webserver({
			port:'9090',
			livereload: true,
			open:true
		}));
});

