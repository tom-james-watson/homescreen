var browserify = require('browserify');
var gulp = require('gulp');
var sass = require('gulp-sass');
var source = require("vinyl-source-stream");
var babelify = require('babelify');
var reactify = require('reactify');

gulp.task('browserify', function(){
    browserify({
        entries: './js/app.js',
        extensions: ['.js'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('./app.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
	gulp.watch('sass/*.scss', ['sass']);
	gulp.watch('js/**/*.js', ['browserify']);
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['watch', 'sass', 'browserify']);
