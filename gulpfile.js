'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const shell = require('shelljs');

gulp.task('default', ['clean', 'ts']);
gulp.task('clean', () => {
  shell.rm('-rf', 'build');
});
gulp.task('ts', () => {
  return gulp.src('src/**/*.ts')
    .pipe(ts({
      module: 'commonjs'
    }))
    .pipe(gulp.dest('build'));
});
gulp.task('watch', () => {
  return gulp.watch('src/**/*.ts', ['ts']);
});
