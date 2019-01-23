var gulp = require('gulp');

gulp.task('copy-routes', (done) => {
  gulp
    .src('./packages/utils-web/src/routes.js')
    .pipe(gulp.dest('./packages/web-server/src/config'));
  done(); // An issue with Gulp 4.0. Ref: https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async
});

gulp.task('update', gulp.parallel('copy-routes'));
// gulp 4.0 new features
// series里的任务是顺序执行的，parallel里的任务是同时执行的。
// gulp.task('prod', gulp.series('clean', 'compass', gulp.parallel('image', 'style', 'html'), 'ftp'));
