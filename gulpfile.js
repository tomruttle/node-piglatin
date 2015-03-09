'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var conf = {
  js: ['**/*.js', '!node_modules/**/*.*']
};

// ----------------------------------------------------------------------------

gulp.task('lint', function () {
  return gulp.src(conf.js)
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('jshint-summary', {
      statistics: false
    }));
});

// ----------------------------------------------------------------------------

gulp.task('nodemon', ['test'], function () {
  plugins.nodemon({
    script: 'index.js',
    ext: 'js',
    nodeArgs: ['--debug'],
  }).on('restart', ['test']);
});

// ----------------------------------------------------------------------------

gulp.task('test', ['lint']);

gulp.task('default', ['nodemon']);
