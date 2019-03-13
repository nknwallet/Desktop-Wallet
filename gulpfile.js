const del = require('del');
const gulp = require('gulp');
const webpack = require('webpack');
const lint = require('gulp-eslint');

const dev = require('./webpack/dev.js');
const prod = require('./webpack/prod.js');

gulp.task('clean', cb => del('build/**', cb));

gulp.task(
  'copy',
  ['clean'],
  () => [
    gulp.src('src/index.html').pipe(gulp.dest('build')),
    gulp.src('src/images/favicon/**/*').pipe(gulp.dest('build/favicon')),
  ],
);

gulp.task('dev:build', ['clean'], () => {
  webpack(dev, (err, stats) => {
    if (err) {
      throw new Error('webpack build failed', err);
    }

    console.log(stats.toString({
      assets: true,
      colors: true,
    }));
  });
});

gulp.task('prod:build', ['lint', 'clean'], cb => webpack(prod, (err, stats) => {
  if (err) {
    throw new Error('webpack build failed', err);
  }

  console.log(stats.toString({
    assets: true,
    colors: true,
  }));

  cb();
}));

gulp.task('lint', () => gulp.src('src/**/*.js')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError()));

gulp.task('default', ['clean', 'copy', 'dev:build']);
gulp.task('dev', ['clean', 'copy', 'dev:build']);
gulp.task('prod', ['lint', 'clean', 'copy', 'prod:build']);
