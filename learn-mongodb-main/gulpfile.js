var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', () => {
	gulp
		.src('./test.js')
		.pipe(mocha())
		.on('error', (err) => {
			this.emit('end');
		});
});

gulp.task('watch', () => {
	gulp.watch('./*.js', ['test']);
});
