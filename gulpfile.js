var gulp = require('gulp'),
	gutil = require('gulp-util'),
	livereload = require('gulp-livereload'),
	prefix = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	shell = require('gulp-shell');

gulp.task('jekyll', function(){
	gulp.src('')
	.pipe(shell([
		'jekyll serve -w'
	]))
});

gulp.task('compass', function(){
	gulp.src('_sass/**/*.scss')
	.pipe(shell([
		'compass watch'
	]))
});

gulp.task('scripts', function () {
	gulp.src('_js/*.js')
		.pipe(concat("scripts.js"))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
});

gulp.task('minify', function () {
	gulp.src('_css/*.css')
	        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
		.pipe(minifycss())
		.pipe(livereload())
		.pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
	gulp.watch('_js/*.js', ['scripts']);
	gulp.watch('_sass/**/*.scss', ['compass']);
	gulp.watch('_css/*.css', ['minify']);
});


gulp.task('default', ['watch', 'jekyll', 'compass']);


