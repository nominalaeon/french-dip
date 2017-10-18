
'use strict';

/** globals */
import gulp from 'gulp';
import os   from 'os';
import pkg  from './package.json';

/** plug-ins */
import addSrc       from 'gulp-add-src';
import babel        from 'gulp-babel';
import clean        from 'gulp-clean';
import concat       from 'gulp-concat';
import jshint       from 'gulp-jshint';
import plumber      from 'gulp-plumber';
import sourcemaps   from 'gulp-sourcemaps';
import uglify       from 'gulp-uglify';

/** dependencies */
import pump   from 'pump';
import rename from 'gulp-rename';

var options = {
  browsers: [
    'last 4 version',
  ]
};

gulp.task('clean', () => {
  return gulp.src([
      'french-dip.min.js'
    ], {
      read: false
    })
    .pipe(clean());
});

gulp.task('uglify:demo', (cb) => {
  pump([
    gulp.src('./demo/scripts/demo-es2015.js'),
    babel({
        presets: ['es2015']
    }),
    rename('demo.js'),
    gulp.dest('./demo/scripts')
  ], cb);
});
gulp.task('uglify:french-dip', (cb) => {
  pump([
    gulp.src('french-dip.js'),
    babel({
        presets: ['es2015-ie']
    }),
    rename('french-dip.min.js'),
    gulp.dest('.')
  ], cb);
});

gulp.task('default', [
  'clean',
  'uglify:demo',
  'uglify:french-dip'
]);
