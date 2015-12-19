'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const shell = require('shelljs');

gulp.task('default', ['clean', 'ts']);
gulp.task('clean', () => {
  shell.rm('-rf', 'build');
});
gulp.task('ts', () => {
  return gulp.src(['**/*.ts', '!node_modules/**'])
    .pipe(ts({
      module: 'commonjs',
      target: 'ES6'
    }))
    .pipe(gulp.dest(__dirname));
});
gulp.task('watch', () => {
  return gulp.watch('**/*.ts', ['ts']);
});
