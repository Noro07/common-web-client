var gulp = require('gulp');

gulp.task('copy-routes', (done) => {
  gulp
    .src('./packages/utils-web/src/routes.js')
    .pipe(gulp.dest('./packages/web-server/src/config'));
  done(); // An issue with Gulp 4. Ref: https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async
});
