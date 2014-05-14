var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    livereload  = require('gulp-livereload'),
    prefix      = require('gulp-autoprefixer'),
    minifycss   = require('gulp-minify-css'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-ngmin'),
    shell       = require('gulp-shell'),
    map         = require('map-stream'),
    yaml        = require('js-yaml');
  
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

gulp.task('jsonify', function(){
	gulp.src('_data/**/*.yml')
	.pipe(map(function(file,cb){
      if (file.isNull()) return cb(null, file); // pass along
      if (file.isStream()) return cb(new Error("Streaming not supported"));
 
      var json;
 
      try {
        json = yaml.load(String(file.contents.toString('utf8')));
      } catch(e) {
        console.log(e);
        console.log(json);
      }
 
      file.path = gutil.replaceExtension(file.path, '.json');
      file.contents = new Buffer(JSON.stringify(json));
 
      cb(null,file);
    }))
  .pipe(gulp.dest('json'))
});

gulp.task('watch', function () {
	gulp.watch('_js/*.js', ['scripts']);
	gulp.watch('_sass/**/*.scss', ['compass']);
	gulp.watch('_css/*.css', ['minify']);
  gulp.watch('_data/**/*.yml', ['jsonify']);
});


gulp.task('default', ['watch', 'jekyll', 'compass']);